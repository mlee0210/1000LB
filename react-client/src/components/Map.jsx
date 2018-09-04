import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const key = require('../config/googlemaps.js');

class GymMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 37.783955,
        lng: -122.408924
      },
      zoom: 13
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(props, marker, e) {
    let infoWindow = new google.maps.InfoWindow({content: 'Hello World'});
    infoWindow.open();
  }

  render() {
    const style = {
      width: '50%',
      height: '350px'
    }
    return (
      <Map google={this.props.google} style={style} center={this.state.center} zoom={14}>

        <Marker
            name={'Equinox Sports Club San Francisco'}
            onClick={this.onClick}
            position={{ lat: 37.787205, lng: -122.403806 }} />

        <Marker
            name={'Crunch Fitness-Yerba Buena'}
            onClick={this.onClick}
            position={{ lat: 37.783644, lng: -122.398517 }} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>SF</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key.GOOGLE_MAPS_API_KEY
})(GymMap)

























