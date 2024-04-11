import * as z from "zod"
import { CompleteCatalog, RelatedCatalogModel } from "./index"

export const RestaurantModel = z.object({
  id: z.number().int(),
  userId: z.string(),
  name: z.string(),
  address: z.string(),
  description: z.string().nullish(),
  logo: z.string(),
  images: z.string().array(),
})

export interface CompleteRestaurant extends z.infer<typeof RestaurantModel> {
  Catalog: CompleteCatalog[]
}

/**
 * RelatedRestaurantModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRestaurantModel: z.ZodSchema<CompleteRestaurant> = z.lazy(() => RestaurantModel.extend({
  Catalog: RelatedCatalogModel.array(),
}))
