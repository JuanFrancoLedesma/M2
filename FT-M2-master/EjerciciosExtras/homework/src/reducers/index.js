import { GET_ALL_USERS, GET_ALL_POSTS, GET_ALL_USERS_POST, GET_ALL_COMMENTS_POST } from "../actions";

const initialState = {
  users: [],
  posts: [],
  userPosts: [],
  commentsPost: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: state.users.concat(action.payload)
      }
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: state.posts.concat(action.payload)
      }
    case GET_ALL_USERS_POST:
      return{
        ...state,
        userPosts: action.payload
      }
    case GET_ALL_COMMENTS_POST:
      return{
        ...state,
        commentsPost: action.payload
      }
    default:
      return state;
  }
}