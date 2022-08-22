import React, { useEffect, useRef, useState } from 'react'
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import './MapView.css'
import Geolocation from 'ol/Geolocation';


export default function MapView() {
  const view = new View({
    center: [0, 0],
    zoom: 2,
  });
  useEffect(() => {
      new Map({
        layers: [
            new TileLayer({source: new OSM()}),
        ],
        view: view,
        target:'map',
      })
  },[])

  return (
    <>
      <div id="map" style={{width:'100%',height:'400px'}}></div>
    </>   
  )
}
