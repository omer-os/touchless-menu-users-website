import React from "react";
import { api } from "~/trpc/server";

export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { restaurantId: string };
}) {
  if (!params.restaurantId) {
    return <div>Invalid restaurant</div>;
  }

  const restaurant = await api.restaurant.getRestaurant({
    id: parseInt(params.restaurantId),
  });

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <header className="flex w-full flex-col items-center">
        <div className="h-[10em] w-[10em]">
          <img
            src={restaurant.logo}
            className="h-full w-full object-contain"
            alt="restaurant logo"
          />
        </div>

        <h1 className="mt-2 text-2xl font-bold">{restaurant.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {restaurant.description}{" "}
        </p>
      </header>

      {children}
    </div>
  );
}
