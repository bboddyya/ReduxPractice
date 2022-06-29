import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentReducer } from "./commentReducer";
import { loaderReducer } from "./loaderReducer";

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentReducer,
  loaderReducer,
});
