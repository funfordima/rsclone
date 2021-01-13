import React from 'react';
import './CityFilterSearch.scss';

interface CityFilterSearchProps {
  changeCityInput: () => void;
  inputCity: () => void;
}

const CityFilterSearch: React.FC<CityFilterSearchProps> = ({ changeCityInput, inputCity }) => {
  return (
    <div className="city-filter__search-container">
      <label
        className="city-filter__search"
        htmlFor="city-filter__search-input"
      >
        <div className="city-filter__search-input_wrapper">
          <input
            type="text"
            id="city-filter__search-input"
            className="city-filter__search-input"
            placeholder="Enter the city"
            onChange={changeCityInput}
            onInput={inputCity}
          />
          <svg
            className="isHidden"
            viewBox="0 0 16 16"
            id="icon-remove-sign"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm3 8.9L9.9 11S8.1 9.1 8 9.1 6.1 11 6.1 11L5 9.9S6.9 8.2 6.9 8 5 6.1 5 6.1L6.1 5S7.9 6.9 8 6.9 9.9 5 9.9 5L11 6.1S9.1 7.9 9.1 8 11 9.9 11 9.9z" />
          </svg>
        </div>
      </label>
    </div>
  );
};

export default CityFilterSearch;
