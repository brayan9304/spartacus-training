import { Component, OnInit } from '@angular/core';
import { TcSavedListFacade } from '../../root';
import { Observable } from 'rxjs';
import { SavedList } from '../../core';

@Component({
  selector: 'tc-saved-list-list',
  templateUrl: './tc-saved-list-list.component.html',
  styleUrls: ['./tc-saved-list-list.component.scss']
})
export class TcSavedListListComponent implements OnInit {

  savedLists$: Observable<SavedList[]> = this.tcSavedListFacade.getSavedLists(true);

  constructor(protected tcSavedListFacade: TcSavedListFacade) { }

  ngOnInit(): void {
  }

}
