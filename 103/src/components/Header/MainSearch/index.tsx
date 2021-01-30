import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconSearch } from '../public/icon-search.svg';

const MainSearchWrapper = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  flex: 1 1 100%;

  @media only screen and (max-width: 959px) and (min-width: 0) {
    flex: 0 0 auto;
    position: absolute;
    right: 0;
  }
`;

const MainSearchContainer = styled.div`
  display: flex;
  max-width: 560px;
  position: relative;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.9);
`;

const MainSearchElement = styled.div`
  position: relative;
  height: 36px;
  flex: 1 1 100%;
  background-color: #fff;
  border-radius: 2px;
  font-size: 17px;

  @media only screen and (max-width: 959px) and (min-width: 0) {
    display: none;
}
`;

const MainSearchPlaceholder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 0 16px;
`;

const MainSearchIcon = styled.span`
  margin-right: 12px;
  font-size: 0;

  & svg {
    min-width: 16px;
    width: 20px;
    touch-action: manipulation;
    transform-origin: center center;
    opacity: 0.3;
    fill: rgba(0, 0, 0, 0.8);
  }
`;

const MainSearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  color: rgba(0, 0, 0, 0.8);
  background-color: transparent;
  cursor: pointer;
`;

const MainSearchInputWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  left: 16px;
  height: 100%;
`;

const PlaceholderText = styled.span`
  color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 24px;
`;

const MainSearch: React.FC = () => {
  return (
    <MainSearchWrapper>
      <MainSearchContainer>
        <MainSearchElement>
          <form>
            <MainSearchPlaceholder>
              <MainSearchIcon>
                <IconSearch />
              </MainSearchIcon>
              <PlaceholderText>
                Find help
              </PlaceholderText>
            </MainSearchPlaceholder>
            <MainSearchInputWrapper>
              <MainSearchInput type="text" />
            </MainSearchInputWrapper>
          </form>
        </MainSearchElement>
        <div className="main-search_overlay" />
      </MainSearchContainer>
    </MainSearchWrapper>
  );
};

export default MainSearch;
