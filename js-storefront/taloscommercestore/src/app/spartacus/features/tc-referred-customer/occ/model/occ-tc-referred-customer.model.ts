/**
 *
 * An interface representing a referred customer
 */
export interface OccReferredCustomer {
  email: string;
  documentTypeCode: string;
  documentType?: string;
  documentNumber: string;
  firstName: string;
  lastName: string;
}

/**
 *
 * An interface representing B2bUnit list of security questions
 */
export interface OccReferredCustomerList {
  referredCustomers?: OccReferredCustomer[];
}
