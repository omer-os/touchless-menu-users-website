import React from "react";
import CategoriesGrid from "~/components/custom/grids/categories-grid";
import ItemsGrid from "~/components/custom/grids/items-grid";
import { api } from "~/trpc/server";

export default async function page({
  params,
}: {
  params: {
    restaurantId: string;
    catalogId: string;
  };
}) {
  if (!params.catalogId)
    return (
      <div>
        <h1>404</h1>
        <p>catalogId is required</p>
      </div>
    );

  const categories = await api.menu.listCategories({
    catalogId: parseInt(params.catalogId),
  });




  return (
    <div className="mx-auto w-full max-w-5xl p-4">
      <p className="mb-2 text-2xl font-bold">Categories</p>
      <CategoriesGrid categories={categories} />
    </div>
  );
}
