import { DocumentIdentityType } from '../../model';

export const tcDocumentTypesForUserScores = {
  C: 1,
  E: 2,
  N: 3,
};

export const tcDocumentTypesForBusinessScores = {
  N: 1,
  C: 2,
  E: 3,
};

export function sortDocumentTypesForUserContext(
  docType1: DocumentIdentityType,
  docType2: DocumentIdentityType
): number {
  if (!tcDocumentTypesForUserScores[docType1.code] || !tcDocumentTypesForUserScores[docType2.code]) {
    return 1;
  } else {
    return tcDocumentTypesForUserScores[docType1.code] - tcDocumentTypesForUserScores[docType2.code];
  }
}

export function sortDocumentTypesForBusinessContext(
  docType1: DocumentIdentityType,
  docType2: DocumentIdentityType
): number {
  if (!tcDocumentTypesForBusinessScores[docType1.code] || !tcDocumentTypesForBusinessScores[docType2.code]) {
    return 1;
  } else {
    return tcDocumentTypesForBusinessScores[docType1.code] - tcDocumentTypesForBusinessScores[docType2.code];
  }
}
