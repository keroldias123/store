// saída de estoque (saída de estoque)
import { z } from 'zod'

export const outputstockSchema = z.object({
  __typename: z.literal('OutputStock').default('OutputStock'),
  id: z.string(),
  ownerId: z.string(),
})

export type OutputStock = z.infer<typeof outputstockSchema>
