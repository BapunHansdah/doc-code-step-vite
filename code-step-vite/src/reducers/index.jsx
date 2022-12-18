//for combining the reducers

import {authReducer} from "./List";
import { combineReducers } from "redux";
const reducers = combineReducers({authReducer});
export default reducers;