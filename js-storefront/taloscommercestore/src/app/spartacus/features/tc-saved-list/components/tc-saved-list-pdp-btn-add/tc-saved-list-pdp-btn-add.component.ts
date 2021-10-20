import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CurrentProductService, ICON_TYPE } from '@spartacus/storefront';
import { TcSavedListFacade } from '../../root';
import { Observable } from 'rxjs';
import { SavedList } from '../../core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '@spartacus/core';

@Component({
  selector: 'tc-saved-list-btn-add',
  templateUrl: './tc-saved-list-pdp-btn-add.component.html',
  styleUrls: ['./tc-saved-list-pdp-btn-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcSavedListPdpBtnAddComponent implements OnInit {
  iconTypes = ICON_TYPE;
  savedLists$: Observable<SavedList[]> = this.tcSavedListFacade.getSavedLists(true);
  product$: Observable<Product> = this.currentProductService.getProduct();
  selectedList: string;
  productSelected: number;
  closeModal: string;
  formWishList: FormGroup;
  listCreate: SavedList;

  constructor(protected tcSavedListFacade: TcSavedListFacade, private modalService: NgbModal, private currentProductService: CurrentProductService) { }

  openModal(content, productId) {
    this.productSelected = productId;
    this.modalService.open(content, { ariaLabelledBy: 'add-list-modal', size: 'md', centered: true, windowClass: "add-wish-list-modal" }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  } 

  
  private getDismissReason(reason: any): string {
    this.listId.reset();
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
      this.selectedList = value;
      if (value == "1") {
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
    if(this.selectedList == "1"){
      this.listCreate = {
        id: 'string',
        name: values["listName"],
        description: values["listDescription"]
      }
      this.selectedList = values["listName"];
      this.tcSavedListFacade.createSavedList(this.listCreate);

    }
    this.tcSavedListFacade.addProduct(this.selectedList,values["productId"]);
    
    /*if (this.selectedList == 1){
      this.listCreate = {
        id: 'string',
        name: values["listName"],
        description: values["listDescription"]
      }
      this.tcSavedListFacade.createSavedList(this.listCreate);
      console.log("lista creada");
      console.log(values);
      this.tcSavedListFacade.addProduct(values["listName"],values["productId"]);
      console.log("producto agregado");
    }else{
      this.tcSavedListFacade.addProduct(values["listName"],values["productId"]);
    }*/
    
    this.listId.reset();
    this.modalService.dismissAll();
  }
}
