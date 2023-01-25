export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';

//En cada accion hago un request distinto, por lo tanto en cada caso me va a devolver un objeto diferente


export function getAllUsers(){ // hacer la request a la API y traer todos los usuarios
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(json => dispatch({ type: GET_ALL_USERS, payload: json }))
      };
} 

export function getAllPosts(){ // ver todos los post del blog
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then(json => dispatch({ type: GET_ALL_POSTS, payload: json}))
    }
} 

export function getAllUserPosts(id){ // traer los post de un usuario específico
    return function(dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then(json => dispatch({ type: GET_ALL_USERS_POST, payload: json }))
      };
} 

export function getAllCommentsPost(id){ // ver los comentarios de un post en particular
    return function(dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => response.json())
        .then(json => dispatch({ type: GET_ALL_COMMENTS_POST, payload: json}))
    }
} 


