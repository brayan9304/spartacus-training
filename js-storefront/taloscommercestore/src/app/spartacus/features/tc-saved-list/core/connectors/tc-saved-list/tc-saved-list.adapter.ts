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
}
