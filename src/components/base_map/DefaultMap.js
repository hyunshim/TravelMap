import React from 'react';
import { Map as LeafletMap, GeoJSON } from 'react-leaflet';
import worldGeoJSON from 'geojson-world-map';
import ReactRough, { Polygon, Rectangle } from 'react-rough';


import MapElement from './MapElement'; 

class DefaultMap extends React.Component {

  render() {
    return (
      <LeafletMap
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <GeoJSON
          data={worldGeoJSON}
          style={() => ({
            // color: 'black',
            // weight: 0.5,
            // fillColor: `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`,
            // fillOpacity: 1,
            renderer: () => ((
              <ReactRough> height={500} width={700}
                <Rectangle x={15} y={15} width={90} height={80} fill="red" />
              </ReactRough>
            ))
          })}
        />
      </LeafletMap>
    );
  }
}

export default DefaultMap;