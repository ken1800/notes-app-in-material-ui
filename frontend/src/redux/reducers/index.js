import { combineReducers } from "redux";
import NotesReducer from "./NotesReducer";
import AuthReducer from "./AuthReducer";
import AccountCreationReducer from "./AccountCreationReducer";
import SearchReducer from "./SearchReducer";

export default combineReducers({
  notes: NotesReducer,
  auth: AuthReducer,
  signUp: AccountCreationReducer,
  search: SearchReducer
});
