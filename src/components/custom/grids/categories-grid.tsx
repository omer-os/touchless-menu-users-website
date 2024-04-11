import { Category } from "@prisma/client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function CategoriesGrid({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="w-full">
      <div className="mb-20 grid grid-cols-1 gap-3 sm:mb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories?.map((category) => (
          <Card key={category.id}>
            <Link key={category.id} href={`/`}>
              <CardHeader className="p-0">
                <img
                  src={category.thubmnail ?? ""}
                  className="h-42 w-full rounded-t bg-muted object-contain"
                />
              </CardHeader>
              <CardContent className="pt-2">
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>{category.name}</CardDescription>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
