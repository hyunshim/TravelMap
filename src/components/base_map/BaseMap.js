import React from 'react';
import './BaseMap.scss';

import MapElement from './MapElement';
import DefaultMap from './DefaultMap';

class BaseMap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="base-map">
               <DefaultMap></DefaultMap>
            </div>
        )
    }
}

export default BaseMap;