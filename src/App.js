/* eslint-disable react-hooks/exhoustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhoustive-deps */
import React, { useState } from 'react';
import { MapboxLayer } from '@deck.gl/mapbox';
import { ColumnLayer } from '@deck.gl/layers';
import MapGL, {
  Marker,
  Popup,
  NavigationControl,
  CustomLayer,
} from '@urbica/react-map-gl';
import { MdDirectionsTransit } from 'react-icons/md';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as metroDate from './services/api.json';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: -19.924728,
    longitude: -43.982083,
    zoom: 13,
    pitch: 40,
  });
  const [selectedMetro, setSelectedMetro] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);

  // Set your mapbox access token here
  const MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1IjoibGVvc2FudG9zZGV2IiwiYSI6ImNrMHdsMXFkMTFheGYzYnBkZnhpa3IwN2wifQ.q8Q592zA0hdYW8ydCUdM4w';

  // Data to be used by the LineLayer
  const data = [
    {
      id: 0,
      value: 1,
      metroid: [-44.029234, -19.938826],
    },
    {
      id: 1,
      value: 0.6,
      metroid: [-44.01632, -19.94553],
    },
    {
      id: 2,
      value: 0.29,
      metroid: [-43.970244, -19.922282],
    },
    {
      id: 3,
      value: 0.74,
      metroid: [-43.942647, -19.91312],
    },
    {
      id: 4,
      value: 1,
      metroid: [-43.98827, -19.928168],
    },
    {
      id: 5,
      value: 0.36,
      metroid: [-44.002733, -19.938616],
    },
    {
      id: 6,
      value: 0.8,
      metroid: [-43.933179, -19.917359],
    },
    {
      id: 7,
      value: 0.2,
      metroid: [-43.957076, -19.918081],
    },
  ];

  const layer = new MapboxLayer({
    id: 'column',
    type: ColumnLayer,
    source: 'column',
    data,
    diskResolution: 100,
    radius: 100,
    elevationScale: 2500,
    pickable: true,
    getPosition: d => d.metroid,
    getFillColor: d => [d.value * 255, 110, d.value * 40, 255],
    getElevation: d => d.value,
    onHover: info => {
      info.object ? setSelectedColumn(info) : setSelectedColumn(null);
    },
  });

  return (
    <MapGL
      {...viewport}
      style={{ width: '100vw', height: '100vh' }}
      onViewportChange={newViewport => {
        setViewport(newViewport);
      }}
      accessToken={MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v9"
    >
      <NavigationControl showCompass showZoom position="top-left" />
      {metroDate.metro.map(metro => (
        <Marker
          key={metro.properties.METRO_ID}
          longitude={metro.geometry.cordenadas[1]}
          latitude={metro.geometry.cordenadas[0]}
          offsetTop={0}
          offsetLeft={0}
        >
          {viewport.zoom >= 11 ? (
            <MdDirectionsTransit
              color="#FFF"
              size={viewport.zoom >= 12 ? 30 : 20}
              onMouseOver={() => {
                setSelectedMetro(metro);
              }}
              onMouseOut={() => {
                setSelectedMetro(null);
              }}
            />
          ) : (
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '4px',
                background: '#fff',
              }}
              onMouseOver={() => {
                setSelectedMetro(metro);
              }}
              onMouseOut={() => {
                setSelectedMetro(null);
              }}
            />
          )}
        </Marker>
      ))}

      {selectedMetro ? (
        <Popup
          longitude={selectedMetro.geometry.cordenadas[1]}
          latitude={selectedMetro.geometry.cordenadas[0]}
          closeButton={false}
          anchor="bottom-right"
        >
          <div>{selectedMetro.properties.NOTAS}</div>
        </Popup>
      ) : null}

      {selectedColumn ? (
        <div
          style={{
            position: 'absolute',
            zIndex: 9,
            padding: '4px',
            color: '#FFF',
            background: 'rgba(0,0,0,0.7)',
            left: selectedColumn.x + 10,
            top: selectedColumn.y + 10,
          }}
        >
          {`Valor Base: ${selectedColumn.object.value}; Peso: ${selectedColumn.layer.props.elevationScale}`}
        </div>
      ) : null}
      <CustomLayer layer={layer} />
    </MapGL>
  );
}
