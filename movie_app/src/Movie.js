import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component { // App : render function 어떤것을 보여줄지를 표시한다.
    
    static propTypes = {
        title: React.PropTypes.string,
        poster: React.PropTypes.string
    }

    render() {
      return (
        <div>
            <MoviePost poster={this.props.poster}/>
            <h1>{this.props.title}</h1>
        </div>
      );
    }
}

class MoviePost extends Component {
    render() {
        return (
            <img src={this.props.poster} />
        ); 
    }
}

export default Movie