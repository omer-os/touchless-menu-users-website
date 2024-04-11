import * as z from "zod"
import { CompleteRestaurant, RelatedRestaurantModel, CompleteCategory, RelatedCategoryModel } from "./index"

export const CatalogModel = z.object({
  id: z.number().int(),
  name: z.string(),
  thubmnail: z.string().nullish(),
  images: z.string().array(),
  restaurantId: z.number().int(),
})

export interface CompleteCatalog extends z.infer<typeof CatalogModel> {
  Restaurant: CompleteRestaurant
  Category: CompleteCategory[]
}

/**
 * RelatedCatalogModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCatalogModel: z.ZodSchema<CompleteCatalog> = z.lazy(() => CatalogModel.extend({
  Restaurant: RelatedRestaurantModel,
  Category: RelatedCategoryModel.array(),
}))
