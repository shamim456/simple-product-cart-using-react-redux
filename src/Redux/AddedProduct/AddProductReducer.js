import { ADDNEWPRODUCT } from "./ActionType";
import initialState from "./InitialState";

const productIdGenerator = (products) => {
  const unicId = products.reduce(
    (maxId, product) => Math.max(maxId, product.id),
    -1
  );
  return unicId + 1;
};

const AddedProductReducer = (state = initialState, action) => {
  //   const { id, Category, imageUrl, quantity, price } = action?.payload;
  switch (action.type) {
    case ADDNEWPRODUCT:
      return [
        ...state,
        {
          id: productIdGenerator(state),
          Category: action.payload.Category,
          imageUrl: action.payload.imageUrl,
          quantity: action.payload.quantity,
          price: action.payload.price,
        },
      ];

    default:
      return state;
  }
};

export default AddedProductReducer;
