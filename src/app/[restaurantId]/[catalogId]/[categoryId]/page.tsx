import React from "react";
import CategoriesGrid from "~/components/custom/grids/categories-grid";
import { api } from "~/trpc/server";

export default async function Page({
  params,
}: {
  params: {
    restaurantId: string;
    catalogId: string;
    categoryId: string;
  };
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

  const categories = await api.menu.listCategories({
    catalogId: parseInt(params.catalogId),
    parentId: parseInt(params.categoryId),
  });

  return (
    <div className="mx-auto w-full max-w-5xl p-4">
      <p className="mb-2 text-2xl font-bold">Categories</p>
      <CategoriesGrid categories={categories} />
    </div>
  );
}
