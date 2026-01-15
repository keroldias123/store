import { z } from "zod";

export const orderSubjectSchema = z.tuple([
    z.union([
        z.literal("create"),
        z.literal("read"),
        z.literal("update"),
        z.literal("delete"),
        z.literal("view")
    ]),
    z.literal("order")
])

export type OrderSubject = z.infer<typeof orderSubjectSchema>