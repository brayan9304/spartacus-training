import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICON_TYPE } from '@spartacus/storefront';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'tc-saved-list-search-bar',
  templateUrl: './tc-saved-list-search-bar.component.html',
  styleUrls: ['./tc-saved-list-search-bar.component.scss']
})
export class TcSavedListSearchBarComponent implements OnInit {

  iconTypes = ICON_TYPE;
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  term: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe(( value ) => {
      this.onDebounce.emit( value );
      console.log(value);
    });
  }

  search() {
    this.debouncer.next(this.term);
  }




}
