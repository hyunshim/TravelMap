import React from "react";
import "./BaseMap.scss";
import { Map, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
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
    console.log("e", e);
    console.log("e", e.latlng);
    console.log(GeoMap.features);
  }

  handleMouseover(e) {
    const layer = e.target;
    layer.setStyle({
      color: 'black'
    })
  }
  // handleMouseout(e) {
  //   geojson.resetStyle(e.target);
  // }

  addEventHover(feature, layer) {
    console.log("feature", feature)
    console.log("layer:", layer)
    layer.on({
      mouseover: () => {console.log("Zoom")}
  });
  }

  componentDidMount() {
    const rc = () => Math.round(Math.random() * 255);

    const L = window.L;
    const map = L.map("leaf").setView([this.state.lat, this.state.lng], this.state.zoom);

    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    L.geoJson(GeoMap, {
      style: () => ({
        color: this.state.col,
        weight: 0.5,
        fillColor: `rgb(${rc()}, ${rc()}, ${rc()})`,
        fillOpacity: 0.2
      }),
      onEachFeature: this.addEventHover
    }).addTo(map);
  }

  render() {
    return <div id="leaf" className="base-map"></div>;
  }
}

export default BaseMap;
