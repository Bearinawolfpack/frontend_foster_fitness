import React from 'react';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GAPI);

class Map extends React.Component {
  state = {
    markerPosition: {
      lat: 40.6980959,
      lng: -73.322649,
    },
  };

  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap(() => (
        <GoogleMap
          defaultZoom={20}
          defaultCenter={{
            lat: this.state.markerPosition.lat,
            lng: this.state.markerPosition.lng,
          }}
        >
          <Marker
            draggable={false}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng,
            }}
          >
            <InfoWindow>
              <div>Foster Fitness</div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      )),
    );

    return (
      <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GAPI}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
