import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Link from "next/link";
import { Item } from "@prisma/client";

export default function ItemsGrid({ items }: { items: Item[] }) {
  return (
    <div className="w-full">
      <div className="mb-20 grid grid-cols-1 gap-3 sm:mb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <Card key={item.id}>
            <Link href={`/menu/`}>
              <CardHeader className="p-0">
                <img
                  src={item.thubmnail ?? ""}
                  className="h-42 w-full rounded-t bg-muted object-contain"
                />
              </CardHeader>

              <CardContent className="pt-2">
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.name}</CardDescription>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
