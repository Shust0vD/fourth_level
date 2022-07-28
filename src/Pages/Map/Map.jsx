import React, { useState } from 'react';
import './Map.css';
import { Card, Spinner } from 'react-bootstrap';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default function PageMap() {
  const [load, setLoad] = useState(true);

  const YandexMap = () => (
    <YMaps className="yandex_map">
      <div>
        <Map
          onLoad={() => {
            setLoad(false);
          }}
          defaultState={{ center: [56.726805, 37.146316], zoom: 16 }}
          width="100%"
          height="500px"
        >
          <Placemark
            geometry={[56.726805, 37.146316]}
            properties={{
              hintContent: 'Место проживания',
              balloonContent: 'Дубна, улица Энтузиастов, 21к2',
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          />
        </Map>
      </div>
    </YMaps>
  );

  return (
    <div>
      <Card className="map_card">
        <Card.Body style={{ width: '100%' }}>
          <p className="basic_map_title">Basic map</p>
          {load && (
            <div className="preloader">
              <Spinner animation="border" variant="secondary" />
            </div>
          )}
          <YandexMap />
        </Card.Body>
      </Card>
    </div>
  );
}
