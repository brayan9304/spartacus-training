import { Component, OnInit } from '@angular/core';
import { TcSavedListFacade } from '../../root';
import { Observable } from 'rxjs';
import { SavedList, SavedListDetail } from '../../core';
import { ICON_TYPE } from '@spartacus/storefront';

@Component({
  selector: 'tc-saved-list-list',
  templateUrl: './tc-saved-list-list.component.html',
  styleUrls: ['./tc-saved-list-list.component.scss']
})
export class TcSavedListListComponent implements OnInit {
  iconTypes = ICON_TYPE;
  lists: SavedList[];
  savedLists$: Observable<SavedList[]> = this.tcSavedListFacade.getSavedLists(true);

    newList: SavedList = {
      name: 'saved list 1',
      description: 'This is a new list created through my page'
    };

  constructor(protected tcSavedListFacade: TcSavedListFacade) { }

  handleCreateSavedListAction(): void {
    this.tcSavedListFacade.createSavedList(this.newList);
  }

  handleDeleteSavedListAction(listId: string): void {
    this.tcSavedListFacade.deleteSavedList(listId);
  }

  ngOnInit(): void {
    // this.tcSavedListFacade.createSavedList(this.list);
    // this.tcSavedListFacade.deleteSavedList('00000008');
    // this.savedLists$.subscribe(data => console.log(data))
    // console.log(this.lists)

  }

}
