import { combineReducers } from "redux";
import authReducer from "./auth.slice.ts";
import addStockReducer from "./AddStockSlice/AddStockSlice.ts";

const rootReducer = combineReducers({
  Auth: authReducer,
  AddStock: addStockReducer
});

export default rootReducer;
