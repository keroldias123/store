// entrada de estoque (entrada de estoque)
import { z } from 'zod'

export const incomingstockSchema = z.object({
  __typename: z.literal('IncomingStock').default('IncomingStock'),
  id: z.string(),
  ownerId: z.string(),
})

export type IncomingStock = z.infer<typeof incomingstockSchema>