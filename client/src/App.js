import React, { Component } from 'react';
import axios from 'axios'
import GoogleMapReact from 'google-map-react';

import './App.css';

const api = 'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=b21e09ff1b6e44329137276b2c256414'
const mapApi = 'https://restcountries.eu/rest/v2/all'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      news: [],
      center: {
        lat: -6.1751,
        lng: 106.8650
      },
      zoom: 5,
      city: []
    }
  }

  componentDidMount() {
    axios.get(api)
    .then(news => {
      this.setState({
        news: news.data.articles
      })
    })
    axios.get(mapApi)
    .then(cities => {
      this.setState({
        city: cities.data
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
      {this.state.city.map((c, i)=>
        <div key={i}
        lat={c.latlng[0]}
        lng={c.latlng[1]}>
        <h6>{c.name}</h6>
          <img
          className="awan"
          src="http://www.luxus-india.com/wp-content/uploads/2015/12/stock-vector-flat-city-icon-209365492.png"
          />
        </div>
      )}
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
