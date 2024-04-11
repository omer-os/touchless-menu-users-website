import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { api } from "~/trpc/server";

export default async function HomePage() {
  const restaurants = await api.restaurant.listRestaurants();

  return (
    <div className="mx-auto grid max-w-xl grid-cols-2 gap-3 p-4">
      {restaurants.map((restaurant, index) => (
        <Card key={index}>
          <Link href={`/` + restaurant.id}>
            <CardHeader className="h-[15em] p-0">
              <img
                src={restaurant.logo}
                className="h-42 w-full rounded-t-lg bg-muted object-contain"
                alt="restaurant logo"
              />
            </CardHeader>

            <CardContent className="flex flex-col justify-end pt-2">
              <CardTitle>{restaurant.name}</CardTitle>
              <CardDescription>{restaurant.description}</CardDescription>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
