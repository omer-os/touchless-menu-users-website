import { RestaurantModel } from "prisma/zod";
import { z } from "zod";
import { env } from "~/env";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  // updateRestaurant: protectedProcedure
  //   .input(RestaurantModel.omit({ id: true, userId: true }))
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.restaurant.update({
  //       where: {
  //         id: ctx.session.restaurantId,
  //       },
  //       data: {
  //         name: input.name,
  //         description: input.description,
  //         address: input.address || "",
  //         logo: `https://${env.NEXT_PUBLIC_BUCKET_NAME}.s3.amazonaws.com/${input.logo}`,
  //       },
  //     });
  //   }),
});
