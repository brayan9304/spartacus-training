import { OrderEntry, Product } from "@spartacus/core";

export interface WishListEntry {
    addedDate: string;
    product: Product;
    quantity: number;
}

export interface WishList {
    entries: WishListEntry[];
    name: string;
}