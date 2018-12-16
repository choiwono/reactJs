import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title : "Matrix",
    poster : "http://cphoto.asiae.co.kr/listimglink/1/201309251504533729386A_1.jpg"
  },
  {
    title : "Full Metal Jacket",
    poster : "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBPNaiO.img?h=999&w=799&m=6&q=60&o=f&l=f&x=696&y=639"
  },
  {
    title : "Oldboy",
    poster : "http://image.fnnews.com/resource/media/image/2015/08/31/201508311444432540_l.jpg"
  },
  {
    title : "Start Wars",
    poster : "http://preimage.hankookilbo.com/i.aspx?Guid=8d14581758404fbe80badba89b5915d2&Month=DirectUpload&size=640"
  }
]

class App extends Component { // App : render function 어떤것을 보여줄지를 표시한다.
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
