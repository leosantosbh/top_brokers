/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import MapGL, { Marker, Popup, NavigationControl } from '@urbica/react-map-gl';
import * as metroDate from '../../services/api.json';
import 'mapbox-gl/dist/mapbox-gl.css';

import {
  ContainerPopup,
  TitleApto,
  TextApto,
  Bottom,
  TextLive,
  Point,
} from './styles';

export default function MapView() {
  const [selectedMetro, setSelectedMetro] = useState(null);
  const [selectedApto, setSelectedApto] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: -23.6023114,
    longitude: -46.6718928,
    zoom: 17.5,
  });

  function handleClose() {
    setSelectedMetro(null);
  }

  function selectLive() {
    setSelectedApto(true);
  }

  function closeLive() {
    setSelectedApto(false);
  }

  // Set your mapbox access token here
  const MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1IjoibGVvc2FudG9zZGV2IiwiYSI6ImNrMHdsMXFkMTFheGYzYnBkZnhpa3IwN2wifQ.q8Q592zA0hdYW8ydCUdM4w';

  return (
    <>
      {!selectedApto ? (
        <MapGL
          {...viewport}
          style={{ width: '100vw', height: '100vh' }}
          onViewportChange={newViewport => {
            console.log(newViewport);
            setViewport(newViewport);
          }}
          accessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/mapbox/light-v9"
        >
          <NavigationControl showCompass showZoom position="top-left" />
          {metroDate.aptos.map(apto => (
            <Marker
              key={apto.properties.APTO_ID}
              longitude={apto.geometry.cordenadas[1]}
              latitude={apto.geometry.cordenadas[0]}
              offsetTop={0}
              offsetLeft={0}
            >
              <Point
                onMouseOver={() => {
                  setSelectedMetro(apto);
                }}
                onClick={() => {
                  setSelectedMetro(apto);
                }}
                // onMouseOut={() => {
                //   setSelectedMetro(null);
                // }}
              />
            </Marker>
          ))}

          {selectedMetro ? (
            <Popup
              longitude={selectedMetro.geometry.cordenadas[1]}
              latitude={selectedMetro.geometry.cordenadas[0]}
              closeButton
              onClose={handleClose}
              anchor="bottom-right"
              style={{ background: 'none' }}
            >
              <ContainerPopup>
                <TitleApto>{selectedMetro.properties.NOTAS}</TitleApto>
                <br />
                <br />
                <TextApto>{`${selectedMetro.properties.ENDERECO} - ${selectedMetro.properties.BAIRRO}`}</TextApto>
                <br />
                <TextApto>{`${selectedMetro.properties.CIDADE} / ${selectedMetro.properties.UF}`}</TextApto>
                <Bottom onClick={selectLive}>
                  <TextLive>Live- 3D</TextLive>
                </Bottom>
              </ContainerPopup>
            </Popup>
          ) : null}
        </MapGL>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
          }}
        >
          <Bottom
            onClick={closeLive}
            style={{ position: 'absolute', right: '10px', top: '20px' }}
          >
            <TextLive>Fechar</TextLive>
          </Bottom>
          <iframe
            src="https://my.matterport.com/show/?m=VWrbkfp3YCQ&brand=0"
            style={{ width: '80%', height: '80%' }}
          />
        </div>
      )}
    </>
  );
}
