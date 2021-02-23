import { combineReducers } from "redux";

import pageReducer from "./Page/page.reducer";

export default combineReducers({
  page: pageReducer,
});
