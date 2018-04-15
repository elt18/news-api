import React, { Component } from 'react';
import axios from 'axios'
import GoogleMapReact from 'google-map-react';

import './App.css';

const api = 'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=b21e09ff1b6e44329137276b2c256414'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      news: [],
      center: {
        lat: -6.1751,
        lng: 106.8650
      },
      zoom: 11
    }
  }

  componentDidMount() {
    axios.get(api)
    .then(news => {
      this.setState({
        news: news.data.articles
      })
    })
  }

  render() {
    return (
      <div className="App">
      <div className="map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDiA5cTYkoL3zlGqYLBN6i4txZ9IsWRpl4'}}
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
      >
        <img
        className="awan"
        src="http://files.softicons.com/download/web-icons/vector-stylish-weather-icons-by-bartosz-kaszubowski/ico/cloud.rain.ico"
        lat={this.state.center.lat}
        lng={this.state.center.lng}
        />
        </GoogleMapReact>
      </div>
        {this.state.news.map((n, i)=>
          <div key={i}>
            <h6>{n.title}</h6>
            <a href={n.url}>{n.url}</a>
            <img src={n.urlToImage} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
