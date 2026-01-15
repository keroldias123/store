// usuário (usuário)
import { z } from 'zod'

import { roleSchema } from '../role.ts'

export const userSchema = z.object({
  id: z.string(),
  role: roleSchema,
})

export type User = z.infer<typeof userSchema>