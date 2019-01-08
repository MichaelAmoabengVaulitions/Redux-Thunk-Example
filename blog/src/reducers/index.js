import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./UsersReducer";
export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
