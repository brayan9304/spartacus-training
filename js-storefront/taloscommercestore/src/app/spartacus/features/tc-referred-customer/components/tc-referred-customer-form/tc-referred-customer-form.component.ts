import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '@spartacus/storefront';
import { DocumentIdentityType, TcMiscFacade } from '@col-features/tc-misc';
import { ReferredCustomer } from '@col-features/tc-referred-customer';

@Component({
  selector: 'tc-referred-customer-form',
  templateUrl: './tc-referred-customer-form.component.html',
  styleUrls: ['./tc-referred-customer-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcReferredCustomerFormComponent implements OnInit {
  documentTypes$: Observable<DocumentIdentityType[]> = this.tcMiscFacade.getDocumentTypes();

  referredCustomerForm: FormGroup = this.fb.group({
    documentTypeCode: ['', Validators.required],
    documentNumber: ['', Validators.required],
    email: ['', [Validators.required, CustomFormValidators.emailValidator]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });

  @Input()
  referredCustomerData: ReferredCustomer;

  @Input()
  actionBtnLabel: string;

  @Input()
  cancelBtnLabel: string;

  @Input()
  showCancelBtn = true;

  @Output()
  submitReferredCustomer = new EventEmitter<any>();

  @Output()
  backToReferredCustomer = new EventEmitter<any>();

  constructor(protected fb: FormBuilder, protected tcMiscFacade: TcMiscFacade) {}

  ngOnInit(): void {
    if (this.referredCustomerData && Object.keys(this.referredCustomerData).length !== 0) {
      this.referredCustomerForm.patchValue(this.referredCustomerData);
    }
  }

  back(): void {
    this.backToReferredCustomer.emit();
  }

  verifyReferredCustomer(): void {
    if (this.referredCustomerForm.valid) {
      if (this.referredCustomerForm.pristine) {
        // referred customer form value not changed
        // ignore duplicate referred customer
        this.submitReferredCustomer.emit(undefined);
      } else {
        this.submitReferredCustomer.emit(this.referredCustomerForm.value);
      }
    } else {
      this.referredCustomerForm.markAllAsTouched();
    }
  }
}
