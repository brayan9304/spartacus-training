import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { CurrentProductService, ICON_TYPE } from '@spartacus/storefront';
import { TcSavedListFacade } from '../../../../features/tc-saved-list/root';
import { Observable } from 'rxjs';
import { SavedList } from '../../../../features/tc-saved-list/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '@spartacus/core';

@Component({
    selector: 'tc-saved-list-modal',
    templateUrl: './tc-saved-list-modal.component.html',
    styleUrls: ['./tc-saved-list-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcSavedListModalComponent implements OnInit {
    @Input() modalType: number;
    @Input() productId: number;

    iconTypes = ICON_TYPE;
    savedLists$: Observable<SavedList[]> = this.tcSavedListFacade.getSavedLists(true);
    product$: Observable<Product> = this.currentProductService.getProduct();
    selectedList: string;
    productSelected: number;
    closeModal: string;
    formList: FormGroup;
    listCreate: SavedList;

    constructor(protected tcSavedListFacade: TcSavedListFacade, private modalService: NgbModal, private currentProductService: CurrentProductService) { }

    openModal(content, productId?) {
        this.productSelected = productId;
        this.modalService.open(content, { ariaLabelledBy: 'add-list-modal', size: 'md', centered: true, windowClass: "add-list-modal" }).result.then((res) => {
            this.closeModal = `Closed with: ${res}`;
        }, (res) => {
            this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        });
    }


    private getDismissReason(reason: any): string {
        if (this.modalType == 1 || this.modalType == 3) {
            this.listId.reset();
        } else {
            this.listName.reset();
            this.listDescription.reset();
        }
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    ngOnInit(): void {
        if (this.modalType == 1 || this.modalType == 3) {
            this.formList = new FormGroup({
                listId: new FormControl(false),
                listName: new FormControl(false),
                listDescription: new FormControl(false)
            });

            this.listId.valueChanges.subscribe(value => {
                this.selectedList = value;
                if (value == "1") {
                    const validators = [Validators.required];
                    this.formList.addControl('listName', new FormControl('', validators));
                    this.formList.addControl('listDescription', new FormControl(''));
                } else {
                    this.formList.removeControl('listName');
                    this.formList.removeControl('listDescription');
                }
                this.formList.updateValueAndValidity();
            });
        } else {
            const validators = [Validators.required];
            this.formList = new FormGroup({
                listName: new FormControl('', validators),
                listDescription: new FormControl('')
            });
        }

    }

    get listId() {
        return this.formList.get('listId') as FormControl;
    }

    get listName() {
        return this.formList.get('listName') as FormControl;
    }

    get listDescription() {
        return this.formList.get('listDescription') as FormControl;
    }

    submitFormAddProduct(values) {
        values["productId"] = this.productSelected;
        if (this.selectedList == "1") {
            this.listCreate = {
                id: '123',
                name: values["listName"],
                description: values["listDescription"]
            }
            let listaCreada$: Observable<SavedList> = this.tcSavedListFacade.createSavedList(this.listCreate);
            listaCreada$.subscribe(
                savedListCreate => {
                    if (savedListCreate.id == this.listCreate.id){
                        console.log("entra");
                    }
                    console.log(savedListCreate.id);
                    this.tcSavedListFacade.addProduct(savedListCreate.id, values["productId"]);  
                    /*let id = savedListCreate.id;
                    let name = savedListCreate.name;
                    let description = savedListCreate.description;
                    console.log(savedListCreate);
                    console.log(id);
                    if (id == this.listCreate.id ) {
                        this.tcSavedListFacade.addProduct(id, values["productId"]);  
                    }*/
                }
            );
            /*this.savedLists$.subscribe(
                savedLists => {
                    savedLists.forEach(list => {
                        if (list.name == values["listName"]) {
                            this.selectedList = list.id;
                            //this.tcSavedListFacade.addProduct(list.id, values["productId"]);
                        }
                        console.log("valor: " + this.selectedList);
                    });
                    
                }
            );*/
        } else {
            this.tcSavedListFacade.addProduct(this.selectedList, values["productId"]);
        }
        this.listId.reset();
        this.modalService.dismissAll();
    }

    submitFormCreateList(values) {
        this.listCreate = {
            id: 'string',
            name: values["listName"],
            description: values["listDescription"]
        }
        this.selectedList = values["listName"];
        this.tcSavedListFacade.createSavedList(this.listCreate);
        this.modalService.dismissAll();
    }
}
