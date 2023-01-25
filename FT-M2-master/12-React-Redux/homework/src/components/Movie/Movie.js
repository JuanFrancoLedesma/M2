import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        console.log(this.props)
        this.props.getMovieDetail(this.props.match.params.id)
    }
    render() {
        return (
            <div className="movie-detail">
                <h3>{this.props.detail.Title}</h3>
                <p>{this.props.detail.Plot}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        detail: state.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail : id => dispatch(getMovieDetail(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);

