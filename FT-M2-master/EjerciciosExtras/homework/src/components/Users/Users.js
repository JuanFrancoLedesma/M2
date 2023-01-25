import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';


export class Users extends Component {

  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {/* Aqui deberias poner tu lista de usuarios! */}
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </table>
      </div>
    );
  }
}


export function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(getAllUsers())
    // addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    // getMovies: title => dispatch(getMovies(title))
  };
}

connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

