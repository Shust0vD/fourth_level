import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default function YandexMap(props) {
  return (
    <YMaps className="yandex_map">
      <div>
        <Map
          onLoad={props.onLoadFunc}
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
}
