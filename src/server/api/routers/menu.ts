import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "~/env";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const menuRouter = createTRPCRouter({
  listCatalogs: publicProcedure
    .input(
      z.object({
        restaurantId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const catalogs = await ctx.db.catalog.findMany({
        where: {
          restaurantId: input.restaurantId,
        },
      });

      return catalogs;
    }),

  listCategories: protectedProcedure
    .input(
      z.object({
        catalogId: z.number(),
        parentId: z.number().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      if (input.parentId) {
        return ctx.db.category.findMany({
          where: {
            catalogId: input.catalogId,
            parentId: input.parentId,
          },
        });
      }

      return ctx.db.category.findMany({
        where: {
          catalogId: input.catalogId,
          parentId: null,
        },
      });
    }),

  listItems: publicProcedure
    .input(
      z.object({
        categoryId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.item.findMany({
        where: {
          categoryId: input.categoryId,
        },
      });
    }),
});
