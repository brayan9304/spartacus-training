import { Observable } from 'rxjs';
import { DocumentIdentityType } from '../model';

export abstract class TcMiscAdapter {
  /**
   * Abstract method used to load document types
   */
  abstract loadDocumentTypes(): Observable<DocumentIdentityType[]>;
}
