import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import toursReducer from "./tour_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  tours: toursReducer
});

export default entitiesReducer;