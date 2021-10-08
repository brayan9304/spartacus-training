import { Injectable } from '@angular/core';
import { facadeFactory } from '@spartacus/core';
import { Observable } from 'rxjs';
import { SavedList } from '../../core';
import { TC_SAVED_LIST_CORE_FEATURE } from '../feature-name';



@Injectable({
  providedIn: 'root'
})
export abstract class TcSavedListFacadeService {

  /**
   * Returns all Saved Lists. If `loadIfMissing` parameter is set to `true`, the method triggers the load if referred customers.
   * @param loadIfMissing is set to `true`, the method will load saved lists if those are not already present.
   * The default value is `false`.
   */

   abstract getSavedLists(loadIfMissing: boolean): Observable<SavedList[]>;

   /**
    * Creates a saved list for the given user
    * @param savedList saved list
    */
    abstract createSavedList(savedList: SavedList): void;

    /**
     * Deletes a saved list for the given user
     * @param listId name
     */
    abstract deleteSavedList(listId: string): void;
}
