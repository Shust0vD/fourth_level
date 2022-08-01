import React, { useState } from 'react';
import './Map.css';
import { Card, Spinner } from 'react-bootstrap';
import YandexMap from './YandexMap';

export default function PageMap() {
  const [load, setLoad] = useState(true);
  return (
    <Card className="map_card">
      <Card.Body style={{ width: '100%' }}>
        <p className="basic_map_title">Basic map</p>
        {load && (
          <div className="preloader">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
        <YandexMap onLoadFunc={() => setLoad(false)} />
      </Card.Body>
    </Card>
  );
}
