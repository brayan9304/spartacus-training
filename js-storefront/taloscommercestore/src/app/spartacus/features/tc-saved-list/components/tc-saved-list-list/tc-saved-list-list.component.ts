import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SavedList, SavedListDetail } from '../../core';
import { ICON_TYPE } from '@spartacus/storefront';
import { TcSavedListFacade } from '../../root';

@Component({
  selector: 'tc-saved-list-list',
  templateUrl: './tc-saved-list-list.component.html',
  styleUrls: ['./tc-saved-list-list.component.scss']
})
export class TcSavedListListComponent implements OnInit {
  iconTypes = ICON_TYPE;
  lists: SavedList[];
  savedLists$: Observable<SavedList[]> = this.tcSavedListFacade.getSavedLists(true);
  loading$: Observable<boolean> = this.tcSavedListFacade.getSavedListsResultLoading();
  success$: Observable<boolean> = this.tcSavedListFacade.getSavedListsResultSuccess();
  error$: Observable<boolean> = this.tcSavedListFacade.getSavedListsResultError();
  term: string = '';

  constructor(protected tcSavedListFacade: TcSavedListFacade) { }

  handleDeleteSavedListAction(listId: string): void {
    this.tcSavedListFacade.deleteSavedList(listId);
  }

  search(term: string) {
    this.term = term;
  }

  ngOnInit(): void {
  }

}
