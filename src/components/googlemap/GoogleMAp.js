import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
const GoogleMap = () => {
    // let history = useHistory();
    return (
        <>
            <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.min.js"></script>
<link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" type="text/css"></link>


<div id="map"></div>
 
<div id="geocoder" class="geocoder"></div>
 

        </>
    );
};

export default GoogleMap;