import { Observable } from "rxjs";
import { SavedList, SavedListDetail } from '../../model';

export abstract class TcSavedListAdapter {
  protected constructor(){}
  /**
   * Get created custom product lists.
   * @param userId user id
   */

  abstract getSavedLists(userId: string): Observable<SavedList[]>;

  /**
   * Creates a saved list for the given user
   * @param userId user id
   * @param savedList saved list
   */
   abstract createSavedList(userId: string, savedList: SavedList): Observable<{}>;

   /**
    * Deletes a saved list for the given user
    * @param userId user id
    * @param listId name
    */
   abstract deleteSavedList(userId: string, listId: string): Observable<{}>;

   /**
   * Get Products From Custom List.
   * @param userId user id
   * @param listId list id
   */

  abstract getSavedListDetail(userId: string, listId: string): Observable<SavedListDetail>;

  /**
   * Adds a product to a custom product list
   * @param userId user id
   * @param listName list name
   * @param productCode product code
   */
   abstract addProduct(userId: string, listName: string, productCode: string): Observable<{}>;

   /**
    * Deletes a product for the list
    * @param userId user id
    * @param listName list name
    * @param productCode product code
    */
   abstract deleteProduct(userId: string, listName: string, productCode: string): Observable<{}>;

}
