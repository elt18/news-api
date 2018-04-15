import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import GoogleMapReact from 'google-map-react';
import geocoder from 'geocoder'

import { getNews } from '../actions'

class News extends Component {
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
    this.props.getNews()
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
      {(this.props.news.length > 0)
        ? this.props.news.map((n,i)=>
            <div>
              <h4>{n.title}</h4>
              <a href={n.url}>{n.url}</a>
              <img src={n.urlToImage} />
            </div>
          )
        : <img src="https://media1.tenor.com/images/db85ba00c6073b451a8f05156a66524e/tenor.gif?itemid=9856796" />
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => dispatch(getNews())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(News)
