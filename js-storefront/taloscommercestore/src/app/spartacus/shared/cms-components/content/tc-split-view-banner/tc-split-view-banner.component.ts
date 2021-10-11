import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TcSplitViewBannerModel } from '@tc-model';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '@spartacus/storefront';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tc-split-view-banner',
  templateUrl: './tc-split-view-banner.component.html',
  styleUrls: ['./tc-split-view-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcSplitViewBannerComponent implements OnInit {
  productSelected: number;
  closeModal: string;
  formWishList: FormGroup;
  iconTypes = ICON_TYPE;
  componentData$: Observable<TcSplitViewBannerModel> = this.componentData.data$;

  list = [
    { id: 1, name: 'Crear Nueva Lista' },
    { id: 2, name: 'Lista 1' },
    { id: 3, name: 'Lista 2' },
    { id: 4, name: 'Lista 3' },
    { id: 5, name: 'Lista 4' },
    { id: 6, name: 'Lista 5' },
    { id: 7, name: 'Lista 6' },
    { id: 8, name: 'Lista 7' },
    { id: 9, name: 'Lista 8' },
    { id: 10, name: 'Lista 9' },
    { id: 11, name: 'Lista 10' },
    { id: 12, name: 'Lista 11' },
    { id: 13, name: 'Lista 12' },
    { id: 14, name: 'Lista 13' },
    { id: 15, name: 'Lista 14' },
    { id: 16, name: 'Lista 15' },
    { id: 17, name: 'Lista 16' },

  ];

  constructor(private componentData: CmsComponentData<TcSplitViewBannerModel>, private modalService: NgbModal) { }

  openModal(content, productId) {
    this.productSelected = productId;
    this.modalService.open(content, { ariaLabelledBy: 'add-list-modal', size: 'md', centered: true, windowClass: "add-wish-list-modal" }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  } 

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  ngOnInit(): void {
    this.formWishList = new FormGroup({
      listId: new FormControl(false),
      listName: new FormControl(false),
      listDescription: new FormControl(false)
    });

    this.listId.valueChanges.subscribe(value => {
      if (value == 1) {
        const validators = [Validators.required];
        this.formWishList.addControl('listName', new FormControl('', validators));
        this.formWishList.addControl('listDescription', new FormControl(''));
      } else {
        this.formWishList.removeControl('listName');
        this.formWishList.removeControl('listDescription');
      }
      this.formWishList.updateValueAndValidity();
    });

  }

  get listId() {
    return this.formWishList.get('listId') as FormControl;
  }

  get listName() {
    return this.formWishList.get('listName') as FormControl;
  }

  get listDescription() {
    return this.formWishList.get('listDescription') as FormControl;
  }

  submitForm(values) {
    values["productId"] = this.productSelected;
    console.log(values);
    this.listId.reset();
    this.modalService.dismissAll();
  }
}
