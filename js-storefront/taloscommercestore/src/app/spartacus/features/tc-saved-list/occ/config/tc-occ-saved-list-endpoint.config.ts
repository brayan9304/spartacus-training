import { OccConfig } from '@spartacus/core';

export const tcOccSavedListConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        getSavedLists: '/users/${userId}/saved-lists',
        addProductToSavedList: '/users/${userId}/saved-lists/addTo/${customProductListId}/${productCode}',
        createSavedList: '/users/${userId}/saved-lists/create',
        getSavedListByName: '/users/${userId}/saved-lists/getCustomListByName/${listName}',
        getDetailsFromSavedList: '/users/${userId}/saved-lists/getProductsFromList/${listId}/?fields=${fields}',
        deleteSavedList: '/users/${userId}/saved-lists/remove/${listId}',
        deleteProductFromSavedList: '/users/${userId}/saved-lists/removeFrom/${listId}/${productCode}'
      },
    },
  },
};
