import React, { Component } from 'react'

class GoogleMap extends Component {

  // This is the code necessary to integrate google maps into a react app
  componentDidMount() {
    // this is the call to the api method, the first argument is the html element being targeted
    new google.maps.Map(this.refs.map, {
      // zoom level of the map, zoom of 12 is roughly screen width of city
      zoom:12,
      // this centers the map response along the given latitude and longitude
      center: {
        lat:this.props.lat,
        lng:this.props.lon
      }
    })
  }

  render() {
    return <div ref="map" />
  }
}

export default GoogleMap
