import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const defaultCenter = {
    lat: 40.73,
    lng: -73.94,
}
 
export class Map extends React.Component {
    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBxHbdKZ69w3jqJh8jocXWwEMXH3wmil94' }}
                    defaultCenter={defaultCenter}
                    defaultZoom={10}
                    center={this.props.center != null ? this.props.center : defaultCenter}>
                </GoogleMapReact>
            </div>
        );
    }
}
 
export default Map;