import { z } from "zod";

export const resellerSubjectSchema = z.tuple([
    z.union([
        z.literal("create"),
        z.literal("read"),
        z.literal("update"),
        z.literal("delete"),
        z.literal("view")
    ]),
    z.literal("reseller")
])

export type ResellerSubject = z.infer<typeof resellerSubjectSchema>
