import React, { useState } from 'react';
import './Modal.scss';
import CityFilterSearch from '../CitySearch/CityFilterSearch';
import CityFilterList from '../CitySearch/CityFilterList';

export type cities = {
  description: string;
  id: number;
};

interface ModalProps {
  updateCityValue: () => void;
  closeModalCity: () => void;
}

const Modal: React.FC<ModalProps> = ({ updateCityValue, closeModalCity }) => {
  let cities: cities[] = [{
    description: 'Минск',
    id: 0,
  }];

  const [value, setValue] = useState(cities);

  const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
  const token = '05b831548bcf77bb6504bc8cc001cdd9ede2da28';
  const [cityValue, setCityValue] = useState('минск');
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Token ' + token
    },
    body: JSON.stringify({
      query: cityValue,
      "locations": [
        {
          "country": "*"
        }
      ]
    })
  }

  function changeCity(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log('change');
    setCityValue(() => event.target.value);

    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        cities = result.suggestions.map((city) => {
          return ({
            description: city.data.city,
            id: city.data.geo_lat + city.data.geo_lon,
          });
        }).reduce((acc, item) => !acc.some((el) => el.description === item.description || item.description === null) ? (acc.push(item), acc) : acc, []);
        setValue(cities);
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="modal__container">
      <div className="modal">
        <div className="modal__header">Header for mobile</div>
        <div className="modal__body">
          <CityFilterSearch changeCityInput={changeCity} />
          <CityFilterList cities={value} updateCity={updateCityValue} closeModalCity={closeModalCity} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
