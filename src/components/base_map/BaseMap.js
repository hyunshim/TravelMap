import React from "react";
import "./BaseMap.scss";
import {
  Map,
  TileLayer,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import GeoMap from "./geo.json";

class BaseMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: -37.813629,
      lng: 144.963058,
      zoom: 5
    };
  }

  handleClick(e) {
    console.log("e", e.latlng);
    console.log(GeoMap.features);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const rc = () => Math.round(Math.random() * 255);

    return (
      <div className="base-map">
        <Map
          style={{ height: "100%", width: "100%" }}
          zoom={this.state.zoom}
          center={position}
          onClick={this.handleClick}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <GeoJSON
            data={GeoMap}
            style={() => ({
              color: "black",
              weight: 0.5,
              fillColor: `rgb(${rc()}, ${rc()}, ${rc()})`,
              fillOpacity: 0.2
            })}
          />
        </Map>
      </div>
    );
  }
}

export default BaseMap;
