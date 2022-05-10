import { OrderEntry } from "@spartacus/core";
import { Observable } from "rxjs";

export abstract class TcCartAdapter {

  abstract saveManyForLater(userId: string, products: string): Observable<{}>;

  abstract getSavedForLater(userId: string): Observable<{}>;
}