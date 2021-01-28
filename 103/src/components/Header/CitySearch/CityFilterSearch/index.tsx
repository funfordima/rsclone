import React from 'react';
import styled from 'styled-components';
import InputForCity from './InputForCity';
import { ReactComponent as BtnHidden } from '../../public/btnCloseCity.svg';

const CityFilterSearchContainer = styled.div`
  flex: 0 0 auto;
  position: relative;
  z-index: 1;
  background: #fff;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const CityFilterSearchElement = styled.label`
  width: 100%;
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

const CityFilterSearchInputWrapper = styled.div`
  position: relative;

  & svg {
    width: 16px;
    left: auto;
    right: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(0, 0, 0, 0.16);
    fill: currentColor;
    z-index: 1;
    transition-duration: 0.12s;
    transition-timing-function: ease-in-out;
    touch-action: manipulation;
    cursor: pointer;
  }
`;

interface CityFilterSearchProps {
  changeCityInput: () => void;
  inputCity: () => void;
}

const CityFilterSearch: React.FC<CityFilterSearchProps> = ({ changeCityInput, inputCity }) => {

  return (
    <CityFilterSearchContainer>
      <CityFilterSearchElement
        htmlFor="city-filter__search-input"
      >
        <CityFilterSearchInputWrapper>
          <InputForCity onChange={changeCityInput} onInput={inputCity} />
          <BtnHidden
            className="isHidden"
          />
        </CityFilterSearchInputWrapper>
      </CityFilterSearchElement>
    </CityFilterSearchContainer>
  );
};

export default CityFilterSearch;
