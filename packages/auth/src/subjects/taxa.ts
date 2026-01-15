import { z } from "zod";

export const taxaSubjectSchema = z.tuple([
    z.union([
        z.literal("create"),
        z.literal("read"),
        z.literal("update"),
        z.literal("delete"),
        z.literal("view")
    ]),
    z.literal("taxa")
])

export type TaxaSubject = z.infer<typeof taxaSubjectSchema>