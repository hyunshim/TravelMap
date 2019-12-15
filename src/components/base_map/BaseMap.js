import React from "react";
import "./BaseMap.scss";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  GeoJSON,
  FeatureGroup,
  Polygon
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import GeoMap from "./geo.json";

class BaseMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: -37.813629,
      lng: 144.963058,
      zoom: 13
    };
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    console.log(GeoMap.features[0].geometry.coordinates)
    return (
      <div className="base-map">
        <Map
          style={{ height: "100%", width: "100%" }}
          zoom={this.state.zoom}
          center={position}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <GeoJSON data={GeoMap} />
          <Polygon color="purple" positions={GeoMap.features[0].geometry.coordinates[1]} />
        </Map>
      </div>
    );
  }
}

export default BaseMap;
