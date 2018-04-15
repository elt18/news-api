import React, { Component } from 'react';
import axios from 'axios'
import GoogleMapReact from 'google-map-react';
import geocoder from 'geocoder'

import './App.css';

const api = 'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=b21e09ff1b6e44329137276b2c256414'
const mapApi = 'https://restcountries.eu/rest/v2/all'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      news: [],
      lat: -6.1751,
      lng: 106.8650,
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

getLocation(loc){
 geocoder.geocode(loc,(err,data)=>{
   if(typeof data !== "undefined" && data.status === 'OK'){
     this.setState({
       lat: data.results[0].geometry.location.lat,
       lng: data.results[0].geometry.location.lng
     })
    }
  })
 }

  render() {
    return (
      <div className="App">
      <input type="text" onChange={(e) => this.getLocation(e.target.value)} />
      <br /><br /><br />
      <div className="map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBkfI-yQQofBFbKd7SwESDh-go2PzFP0Cw'}}
        center={{lat: this.state.lat, lng: this.state.lng}}
        defaultZoom={this.state.zoom}
      >

        </GoogleMapReact>
      </div>
      </div>
    );
  }
}

export default App;
