export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=2eab36c7&s=" + titulo) //Si busco por titulo me da todas las peliculas con un nombre similar
            .then(response => response.json())
            .then(json => {
                dispatch({ type: 'GET_MOVIES', payload: json });
            });
    };
}

export function removeMovieFavorite(idMovie) {
    return {
        type: 'REMOVE_MOVIE_FAVORITE',
        payload: idMovie
    }
}
export function getMovieDetail(idMovie){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=2eab36c7&i=${idMovie}&plot=full`)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_MOVIES_DETAIL", payload: json});
          });
    };
} 


// export function getMovieDetail(idMovie) {
//     console.log('entro')
//     return function (dispatch) {
//         console.log('entrox2')
//         return fetch(`http://www.omdbapi.com/?apikey=2eab36c7&i=${idMovie}`) //Si busco por id, me da los detalles de esa pelicula en particular
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: 'GET_MOVIES_DETAIL', payload: json });
//             });
//     };
// }

