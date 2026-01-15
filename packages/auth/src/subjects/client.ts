import { z } from "zod";

export const clientSubjectSchema = z.tuple([
    z.union([
        z.literal("create"),
        z.literal("read"),
        z.literal("view"),
        z.literal("purchase")
    ]),
    z.literal("client")
])

export type ClientSubject = z.infer<typeof clientSubjectSchema>
