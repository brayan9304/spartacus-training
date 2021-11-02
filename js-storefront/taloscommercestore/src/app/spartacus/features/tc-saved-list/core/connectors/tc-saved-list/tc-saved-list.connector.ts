import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SavedList, SavedListDetail } from '../../model';
import { TcSavedListAdapter } from './tc-saved-list.adapter';

@Injectable()
export class TcSavedListConnector {
  constructor(private adapter: TcSavedListAdapter){}

  public getSavedLists(userId: string): Observable<SavedList[]> {
    return this.adapter.getSavedLists(userId);
  }

  public createSavedList(userId: string, savedList: SavedList): Observable<SavedList> {
    return this.adapter.createSavedList(userId, savedList);
  }

  public deleteSavedList(userId: string, listId: string): Observable<{}> {
    return this.adapter.deleteSavedList(userId, listId);
  }

  public getSavedListDetail(userId: string, listId: string): Observable<SavedListDetail> {
    return this.adapter.getSavedListDetail(userId, listId);
  }

  public addProduct(userId: string, listId: string, productCode: string): Observable<{}> {
    return this.adapter.addProduct(userId, listId, productCode);
  }

  public deleteProduct(userId: string, lisId: string, productCode: string): Observable<{}> {
    return this.adapter.deleteProduct(userId, lisId, productCode);
  }

}
