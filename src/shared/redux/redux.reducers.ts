import { combineReducers } from "redux";
import todoReducers from "../../pages/redux-intergration/redux/redux-page.reducer";
const rootReducer = combineReducers({
  todoReducers,
});

export default rootReducer;
