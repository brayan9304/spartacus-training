import { OrderEntry } from "@spartacus/core";

export interface WishList {
    entries: OrderEntry[];
    name: string;
}