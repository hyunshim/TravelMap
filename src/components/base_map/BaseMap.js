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

  addEventHover(feature, layer) {
    layer.on({
      mouseover: (e) => {
        e.target.setStyle({fillOpacity: 1})
      },
      mouseout: (e) => {
        e.target.setStyle({fillOpacity: 0.6})
      }
    });
  }

  componentDidMount() {
    const rc = () => Math.round(Math.random() * 255);
    const style = () => {
      return {
        fillColor: `rgb(${rc()}, ${rc()}, ${rc()})`,
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7
      };
    };

    const L = window.L;
    const map = L.map("leaf").setView([this.state.lat, this.state.lng], this.state.zoom);

    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    L.geoJson(GeoMap, {
      style: style,
      onEachFeature: this.addEventHover
    }).addTo(map);
  }

  render() {
    return <div id="leaf" className="base-map"></div>;
  }
}

export default BaseMap;
