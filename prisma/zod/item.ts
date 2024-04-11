import * as z from "zod"
import { CompleteCategory, RelatedCategoryModel } from "./index"

export const ItemModel = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  thubmnail: z.string().nullish(),
  images: z.string().array(),
  price: z.number(),
  categoryId: z.number().int(),
})

export interface CompleteItem extends z.infer<typeof ItemModel> {
  Category: CompleteCategory
}

/**
 * RelatedItemModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedItemModel: z.ZodSchema<CompleteItem> = z.lazy(() => ItemModel.extend({
  Category: RelatedCategoryModel,
}))
