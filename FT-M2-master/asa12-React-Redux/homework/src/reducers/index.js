import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE } from '../actions/index.js'

const initialState = {
    moviesFavourite : [],
    moviesLoaded : [],
    movieDetail : {}
}

function rootReducer(state = initialState, action) {
    switch(action.type){    
        case ADD_MOVIE_FAVORITE :
            return {
                ...state,
                moviesFavourite: state.moviesFavourite.concat(action.payload)
            }
        case GET_MOVIES :
            return {
                ...state, //hago copia del estado actual para crear el futuro
                moviesLoaded : action.payload.search //meto todas las peliculas
            }
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail : action.payload.search
            }
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourite : state.moviesFavourite.filter((favs) => favs.imdbID !== action.payload)
            }
        default : 
            return state
    }
}

export default rootReducer;