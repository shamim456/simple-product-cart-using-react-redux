import { combineReducers } from "redux";
import AddedProductReducer from "./AddedProduct/AddProductReducer";

const rootReducer = combineReducers({
  addedProduct: AddedProductReducer,
});

export default rootReducer;
