import { combineReducers } from "redux";
import { OrganizationReducer } from './reducers/organizations';
import { RepoReducer } from './reducers/repos';

export default combineReducers({
  OrganizationReducer,
  RepoReducer
});