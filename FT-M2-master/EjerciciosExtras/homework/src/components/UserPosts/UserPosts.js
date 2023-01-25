import React from 'react';
import { connect } from 'react-redux';
import './UserPosts.css';
import { getAllUserPosts } from '../../actions/index'

export class UserPosts extends React.Component {

  componentDidMount() {
    this.props.getAllUserPosts(this.props.match.params.id)
  }

  render() {
   
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {/*userid*/}</h4>
        
      </div>
    )
  }
}


export function mapStateToProps(state) {
  return {
    userPosts : state.userPosts
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllUserPosts: (id) => dispatch(getAllUserPosts(id))
    // getAllUsers: () => dispatch(getAllUsers())
    // addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    // getMovies: title => dispatch(getMovies(title))
  };
}

connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);