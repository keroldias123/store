// produto (produto)
import { z } from 'zod'

export const productSchema = z.object({
  __typename: z.literal('Product').default('Product'),
  id: z.string(),
  ownerId: z.string(),
})

export type Producto = z.infer<typeof productSchema>