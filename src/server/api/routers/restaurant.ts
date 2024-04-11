import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "~/env";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const restaurantRouter = createTRPCRouter({
  listRestaurants: publicProcedure.query(({ ctx }) => {
    return ctx.db.restaurant.findMany();
  }),

  getRestaurant: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const restaurant = await ctx.db.restaurant.findUnique({
        where: {
          id: input.id,
        },
      });

      if (!restaurant) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Restaurant not found",
        });
      }

      return restaurant;
    }),
});
