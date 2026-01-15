// wishlist (lista de desejos)
import { z } from "zod";

export const wishListSubjectSchema = z.tuple([
    z.union([
        z.literal("create"),
        z.literal("read"),
        z.literal("update"),
        z.literal("delete"),
        z.literal("view")
    ]),
    z.literal("wishList")
])

export type WishListSubject = z.infer<typeof wishListSubjectSchema>