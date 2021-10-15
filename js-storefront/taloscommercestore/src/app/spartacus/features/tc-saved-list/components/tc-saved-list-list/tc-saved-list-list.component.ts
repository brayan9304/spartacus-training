import { Component, OnInit } from '@angular/core';
import { TcSavedListFacade } from '../../root';
import { Observable } from 'rxjs';
import { SavedList, SavedListDetail } from '../../core';

@Component({
  selector: 'tc-saved-list-list',
  templateUrl: './tc-saved-list-list.component.html',
  styleUrls: ['./tc-saved-list-list.component.scss']
})
export class TcSavedListListComponent implements OnInit {

  lists: SavedList[];
  savedLists$: Observable<SavedList[]> = this.tcSavedListFacade.getSavedLists(true);
  list: SavedList = {
    name: 'Test 7',
    description: 'dfgrwge'

  }

  constructor(protected tcSavedListFacade: TcSavedListFacade) { }

  ngOnInit(): void {
    //this.tcSavedListFacade.createSavedList(this.list);
    //this.tcSavedListFacade.deleteSavedList('00000008');
    //this.savedLists$.subscribe(data => console.log(data))
    //console.log(this.lists)
  }

}
