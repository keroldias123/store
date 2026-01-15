import { z } from "zod";

export const subscriptionSubjectSchema = z.tuple([
    z.union([
        z.literal("create"),
        z.literal("read"),
        z.literal("update"),
        z.literal("delete"),
        z.literal("view")
    ]),
    z.literal("subscription")
])

export type SubscriptionSubject = z.infer<typeof subscriptionSubjectSchema>
