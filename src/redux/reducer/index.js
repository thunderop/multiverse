import { combineReducers } from "redux";
import movieReducer from "./moviesReducer";

export const allReducers = combineReducers({
  moviesData: movieReducer,
});
