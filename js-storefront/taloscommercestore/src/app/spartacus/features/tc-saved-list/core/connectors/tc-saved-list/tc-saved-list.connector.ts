import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SavedList } from '../../model';
import { TcSavedListAdapter } from './tc-saved-list.adapter';

@Injectable()
export class TcSavedListConnector {
  constructor(private adapter: TcSavedListAdapter){}

  public getSavedLists(userId: string): Observable<SavedList[]> {
    return this.adapter.getSavedLists(userId);
  }

  public createSavedList(userId: string, savedList: SavedList): Observable<{}> {
    return this.adapter.createSavedList(userId, savedList);
  }

  public deleteSavedList(userId: string, listId: string): Observable<{}> {
    return this.adapter.deleteSavedList(userId, listId);
  }

}
