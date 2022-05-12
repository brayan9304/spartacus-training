import { OrderEntry } from "@spartacus/core";
import { Observable } from "rxjs";

export abstract class TcCartAdapter {

  abstract saveForLater(userId: string, entryNumber: number): Observable<{}>;

  abstract saveManyForLater(userId: string, products: string): Observable<{}>;

  abstract getSavedForLater(userId: string): Observable<{}>;

  abstract removeFromWishList(userId: string, productCode: string): Observable<{}>;
  
  abstract moveToCart(userId: string, productCode: string): Observable<{}>;
}