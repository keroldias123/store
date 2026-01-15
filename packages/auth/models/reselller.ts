// revendedor (revendedor)
import { z } from "zod";

export const reselllerSchema = z.object({
    __typename: z.literal("Reselller").default("Reselller"),
    id: z.string(),
    ownerId: z.string(),
})

export type Reselller = z.infer<typeof reselllerSchema>