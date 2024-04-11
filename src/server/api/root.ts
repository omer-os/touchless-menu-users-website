import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { menuRouter } from "./routers/menu";
import { userRouter } from "./routers/user";
import { restaurantRouter } from "./routers/restaurant";

export const appRouter = createTRPCRouter({
  menu: menuRouter,
  user: userRouter,
  restaurant: restaurantRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */

export const createCaller = createCallerFactory(appRouter);
