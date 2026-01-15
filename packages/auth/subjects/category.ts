import { z } from "zod";

export const categorySubjectSchema = z.tuple([
    z.union([
        z.literal("create"),
        z.literal("read"),
        z.literal("update"),
        z.literal("delete"),
        z.literal("view")
    ]),
    z.literal("category")
])

export type CategorySubject = z.infer<typeof categorySubjectSchema>
