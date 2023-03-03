import { ADDNEWPRODUCT } from "./ActionType";

export const addedProduct = (productDetails) => {
  //   const { Category, imageUrl, quantity, price } = productDetails;
  return {
    type: ADDNEWPRODUCT,
    payload: productDetails,
  };
};
