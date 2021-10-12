import { OccConfig } from '@spartacus/core';

export const tcOccSavedListConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        savedLists: '/users/${userId}/saved-lists',
        productAddToList: '/users/${userId}/saved-lists/addTo/${listName}/${productCode}',
        createList: '/users/${userId}/saved-lists/create',
        savedListByName: '/users/${userId}/saved-lists/getCustomList/${listName}',
        savedListProductsFromList: '/users/${userId}/saved-lists/getProductsFromList/${listId}',
        savedListRemove: '/users/${userId}/saved-lists/remove/${listId}',
        savedListRemoveProduct: 'savedListRemoveProduct'
      },
    },
  },
};
