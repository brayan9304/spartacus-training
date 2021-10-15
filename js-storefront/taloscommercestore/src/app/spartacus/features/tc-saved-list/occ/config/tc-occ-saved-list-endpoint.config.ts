import { OccConfig } from '@spartacus/core';

export const tcOccSavedListConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        getSavedLists: '/users/${userId}/saved-lists',
        addProductToSavedList: '/users/${userId}/saved-lists/addTo/${listName}/${productCode}',
        createSavedList: '/users/${userId}/saved-lists/create',
        getSavedListByName: '/users/${userId}/saved-lists/getCustomList/${listName}',
        getDetailsFromSavedList: '/users/${userId}/saved-lists/getProductsFromList/${listId}',
        deleteSavedList: '/users/${userId}/saved-lists/remove/${listId}',
        deleteProductFromSavedList: '/users/${userId}/saved-lists/removeFrom/${listId}/${productCode}'
      },
    },
  },
};
