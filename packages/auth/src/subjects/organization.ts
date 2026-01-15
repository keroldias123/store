import { z } from "zod";

export const organizationSubjectSchema = z.tuple([
    z.union([
        z.literal('manage'),
        z.literal('update'),
        z.literal('delete'),
        z.literal('transfer_ownership'),
    ]),
    z.literal("organization")
])

export type OrganizationSubject = z.infer<typeof organizationSubjectSchema>
