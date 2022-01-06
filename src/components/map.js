import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Styles from './css/map.module.css';
// import mapboxgl from 'react-map-gl'
// import MapboxGeocoder from 'react-map-gl'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    // mapboxgl.accessToken = 'pk.eyJ1IjoiNjQwNDkiLCJhIjoiY2t4ZjFlcW9zMXlrbDJ4cGZjZHhmMXJreSJ9.iG8P1aLFhTFVVdCSa1OD9A';
    // const map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/streets-v11',
    //     center: [-79.4512, 43.6568],
    //     zoom: 13
    // });

    // // Add the control to the map.
    // map.addControl(
    //     new MapboxGeocoder({
    //         accessToken: mapboxgl.accessToken,
    //         mapboxgl: mapboxgl
    //     })
    // );
    return (
      
      <div style={{ height: '100vh', width: '100%' }}>
       <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBYAGiG35ku-3uKnGMaWLrZTHyCDRwNcJs"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={24.860966}
            lng={66.990501}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>

    
    );
  }
}
export default map;