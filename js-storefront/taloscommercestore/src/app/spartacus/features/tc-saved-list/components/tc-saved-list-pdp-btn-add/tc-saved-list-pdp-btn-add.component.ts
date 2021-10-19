import { Component, OnInit } from '@angular/core';
import { ICON_TYPE, ModalService } from '@spartacus/storefront';
import { TcSavedListListComponent } from '../tc-saved-list-list/tc-saved-list-list.component';

@Component({
  selector: 'tc-saved-list-btn-add',
  templateUrl: './tc-saved-list-pdp-btn-add.component.html',
  styleUrls: ['./tc-saved-list-pdp-btn-add.component.scss'],
})
export class TcSavedListPdpBtnAddComponent implements OnInit {
  iconTypes = ICON_TYPE;

  constructor(protected modalService: ModalService) {}

  ngOnInit(): void {}

  openModal(): void {
    this.modalService.open(TcSavedListListComponent, {
      centered: true,
      size: 'lg',
    });
  }
}
