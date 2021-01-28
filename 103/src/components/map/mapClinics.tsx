import React from 'react';
import styled from 'styled-components'
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from "react-yandex-maps";
import CitiesCoordinates from './citiesCoordinates';
import { ClinicType } from '../../types';
import './popup.css';
interface MapProps {
    clinics: Array<ClinicType>,
    city: string
}

const Wrapper = styled.div`
    overflow: hidden;
`;

const MapClinics: React.FC<MapProps> = ( { city, clinics } ) => {
    const mapData = {
        center: CitiesCoordinates[city],
        zoom: 11,
    };

    const Placemarks = clinics.map((clinic, index) => <Wrapper className="map-popup" key={ index }>
        <Placemark geometry={ clinic.coordinates } options={{
                preset: 'islands#redCircleDotIcon'
            }} properties={{
                balloonContent: `${clinic.title},\n
                    Время работы: ${clinic.workingHours ? clinic.workingHours : ""},\n
                    ${clinic.address}\n`,
                iconCaption: clinic.title,
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
    </Wrapper>);

    return (
        <YMaps>
            <Map width="35vw" height="100vh" 
                defaultState={ mapData } modules={ ["layout.ImageWithContent"] }>
                { Placemarks }
                <FullscreenControl />
                <ZoomControl options={{ float: 'right' }} />
            </Map>
        </YMaps>
    )
}

export default MapClinics;