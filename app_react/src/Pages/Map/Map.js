import React, { Component } from 'react'
import './Map.css'
import { Card, Spinner } from 'react-bootstrap'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

const App = () => (
    <YMaps className="mapmap">
        <div>
            <Map onLoad={function () { document.querySelector('.preloader').classList.add("preloader-remove"); }} defaultState={{ center: [56.726805, 37.146316], zoom: 16 }} width='100%' height='500px' >
                <Placemark
                    geometry={[56.726805, 37.146316]}
                    properties={{
                        hintContent: 'Место проживания',
                        balloonContent: 'Дубна, улица Энтузиастов, 21к2'
                    }}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                />
            </Map>
        </div>
    </YMaps>

);

export default class pageMap extends Component {
    render() {
        return (
            <div>
                <Card className="frame_map">
                    <Card.Body style={{ width: "100%" }}>
                        <p className="title">Basic map</p>
                        <div className='preloader'>
                            <Spinner animation="border" variant="secondary" />
                        </div>

                        <App />
                    </Card.Body>
                </Card>
            </div>
        )
    }
}