import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const defaultCenter = {
    lat: 40.73,
    lng: -73.94,
}
 
export class MapComponent extends React.Component {
    render() {
        const markers = [];
        for (let i = 0; i < this.props.storeInfo.length; i++) {
            const store = this.props.storeInfo[i];
            markers.push(
                <Marker
                    name={store.visaMerchantName}
                    position={{lat: store.locationAddressLatitude, lng: store.locationAddressLongitude}}>
                </Marker>
            );
        }
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <Map
                    zoom={10}
                    google={this.props.google}
                    center={this.props.center}
                    initialCenter={defaultCenter}>
                        {markers}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBxHbdKZ69w3jqJh8jocXWwEMXH3wmil94')
})(MapComponent)