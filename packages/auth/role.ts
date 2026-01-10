import { z } from 'zod'

export const roleSchema = z.union([
  z.literal('ADMIN'),
  z.literal('MEMBER'),
  z.literal('CLIENT'),
  z.literal('BILLING'),
])

export type Role = z.infer<typeof roleSchema>