import { Catalog, Restaurant } from "@prisma/client";
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

export default function CatalogsPage({
  catalogs,
  restaurant,
}: {
  catalogs: Catalog[];
  restaurant: Restaurant;
}) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {catalogs.map((catalog, index) => (
        <Card key={index}>
          <Link href={`/${restaurant.id}/${catalog.id}`}>
            <CardHeader className="p-0">
              <div>
                <img
                  src={catalog.thubmnail || restaurant.logo}
                  className="h-52 w-full rounded-t-lg bg-muted object-contain"
                  alt="restaurant logo"
                />
              </div>
            </CardHeader>

            <CardContent className="flex flex-col justify-end pt-5">
              <CardTitle>{catalog.name}</CardTitle>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
