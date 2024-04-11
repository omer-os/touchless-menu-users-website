import * as z from "zod"
import { CompleteCatalog, RelatedCatalogModel, CompleteItem, RelatedItemModel } from "./index"

export const CategoryModel = z.object({
  id: z.number().int(),
  name: z.string(),
  catalogId: z.number().int(),
  parentId: z.number().int().nullish(),
  thubmnail: z.string().nullish(),
  images: z.string().array(),
})

export interface CompleteCategory extends z.infer<typeof CategoryModel> {
  Catalog: CompleteCatalog
  Category?: CompleteCategory | null
  other_Category: CompleteCategory[]
  Item: CompleteItem[]
}

/**
 * RelatedCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCategoryModel: z.ZodSchema<CompleteCategory> = z.lazy(() => CategoryModel.extend({
  Catalog: RelatedCatalogModel,
  Category: RelatedCategoryModel.nullish(),
  other_Category: RelatedCategoryModel.array(),
  Item: RelatedItemModel.array(),
}))
