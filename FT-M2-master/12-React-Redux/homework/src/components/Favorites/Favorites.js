import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite, getMovieDetail } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */
            this.props.movies?.map((m,index) => {
              return (
                <div key={index}>
                  <Link to={'/movie/'+m.id}>{m.title}</Link>
                  <br/>
                  <button onClick={() => this.props.removeMovieFavorite(m.id)}>Remover</button>
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: idMovie => dispatch(removeMovieFavorite(idMovie)),
    getMovieDetail: idMovie => dispatch(getMovieDetail(idMovie))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

