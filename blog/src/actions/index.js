import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async dispatch => {};
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    });
  };
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

// The memoized version with lodash memoize
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };

// // Use lodash to memoize the fetch Users function
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// });
