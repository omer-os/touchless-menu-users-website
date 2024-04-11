import React from "react";
import CatalogsPage from "~/components/screens/catalogs-page";
import { api } from "~/trpc/server";

export default async function Page({
  params,
}: {
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

  const catalogs = await api.menu.listCatalogs({
    restaurantId: restaurant.id,
  });

  return (
    <div>
      <CatalogsPage restaurant={restaurant} catalogs={catalogs} />
    </div>
  );
}
