import { Injectable } from '@angular/core';
import { facadeFactory } from '@spartacus/core';
import { Observable } from 'rxjs';
import { SavedList, SavedListDetail } from '../../core';
import { TC_SAVED_LIST_CORE_FEATURE } from '../feature-name';

export function TcSavedListFacadeFactory(): TcSavedListFacade {
  return facadeFactory({
    facade: TcSavedListFacade,
    feature: TC_SAVED_LIST_CORE_FEATURE,
    methods: [
      'getSavedLists',
      'loadSavedLists',
      'getSavedListsResultLoading',
      'getSavedListsResultSuccess',
      'getSavedListsResultError',
      'createSavedList',
      'deleteSavedList',
      'getSavedListDetail',
      'loadSavedListDetail',
      'getSavedListDetailResultLoading',
      'getSavedListDetailResultSuccess',
      'getSavedListDetailResultError',
      'addProduct',
      'deleteProduct'
    ],
  });
}

@Injectable({
  providedIn: 'root',
})
export abstract class TcSavedListFacade {
  /**
   * Returns all Saved Lists. If `loadIfMissing` parameter is set to `true`, the method triggers the load if referred customers.
   * @param loadIfMissing is set to `true`, the method will load saved lists if those are not already present.
   * The default value is `false`.
   */

  abstract getSavedLists(loadIfMissing: boolean): Observable<SavedList[]>;

  /**
   * loads saved lists for the current user.
   */
  abstract loadSavedLists(): void;

  /**
   * Returns the saved lists loading flag
   */
  abstract getSavedListsResultLoading(): Observable<boolean>;

  /**
   * Returns the saved lists success flag
   */
  abstract getSavedListsResultSuccess(): Observable<boolean>;

  /**
   * Returns the saved lists error flag
   */
  abstract getSavedListsResultError(): Observable<boolean>;

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

  /**
   * Get Products From Custom List.
   * @param listId list id
   */

  abstract getSavedListDetail(loadIfMissing: boolean, listId: string): Observable<SavedListDetail>;

  /**
   * loads saved lists for the current user.
   */
   abstract loadSavedListDetail(listId: string): void;

   /**
    * Returns the saved lists loading flag
    */
   abstract getSavedListDetailResultLoading(): Observable<boolean>;

   /**
    * Returns the saved lists success flag
    */
   abstract getSavedListDetailResultSuccess(): Observable<boolean>;

   /**
    * Returns the saved lists error flag
    */
   abstract getSavedListDetailResultError(): Observable<boolean>;


  /**
   * Adds a product to a custom product list
   * @param customProductListId list id
   * @param productCode product code
   */
  abstract addProduct(listId: string, productCode: string): void;

  /**
   * Deletes a product for the list
   * @param listId list id
   * @param productCode product code
   */
  abstract deleteProduct(listId: string, productCode: string): void;
}
