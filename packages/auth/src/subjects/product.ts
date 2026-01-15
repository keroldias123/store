import { z } from "zod";

export const productSubjectSchema = z.tuple([
    z.union([
        z.literal("create"),
        z.literal("read"),
        z.literal("update"),
        z.literal("delete"),
        z.literal("view")
    ]),
    z.literal("product")
])

export type ProductSubject = z.infer<typeof productSubjectSchema>