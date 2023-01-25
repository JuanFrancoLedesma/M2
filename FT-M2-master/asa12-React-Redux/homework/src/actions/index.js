export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE'
export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE'

export const addMovieFavorite = (payload) => {
    return {
        type: ADD_MOVIE_FAVORITE,
        payload   //aca va la pelicula que quiero agregar a favoritos
    }
}

export const getMovies = (titulo) => {
    return function(dispatch){
        return fetch("http://www.omdbapi.com/?apikey=2eab36c7&s=" + titulo)
        .then(response => response.json())  //convierte lo que me manda el servidor a js
        .then(json => {    //Procede a hacer el dispatch
            console.log('hola')
            dispatch({
                type: GET_MOVIES,
                payload: json  //aca estan todas las peliculas, en un objeto (Me imagino que las key son los titulos, y los valores la data de cada una)
            })
        })
    }
}

export const getMovieDetail = (idMovie) => {
    return function (dispatch){
        return fetch("http://www.omdbapi.com/?apikey=2eab36c7&i=" + idMovie)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: GET_MOVIE_DETAIL,
                payload: json //Aca van los detalles de la pelicula en particular
            })
        })
    }   
    

}

export const removeMovieFavorite = (idMovie) => {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: idMovie
    }
}

