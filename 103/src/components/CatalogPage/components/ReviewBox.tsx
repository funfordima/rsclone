import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowLeftSvg } from '../../Header/public/arrow-left.svg';
import { ReviewItems } from './ReviewItems';

const ReviewBoxWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgb(0 0 0 / 4%);
  margin-bottom: 16px;
  z-index: 0;
`;

const ReviewBoxHeaderContainer = styled.div`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,.08);
`;

const ReviewBoxHeaderTitleContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ReviewBoxHeaderTitle = styled.h2`
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ReviewBoxHeaderSubTitle = styled.span`
  flex: 0 0 100%;
  font-size: 13px;
  line-height: 16px;
  color: rgba(0,0,0,.48);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ReviewBoxTotalContainer = styled.span`
  margin-left: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: rgba(0,0,0,.48);
`;

const ReviewAllLink = styled(NavLink)`
  display: flex;
  flex: 0 0 auto;
  color: #00a8b4;
  transition-duration: .12s;
  transition-timing-function: ease-in-out;
  text-decoration: none;
  transition-property: color;
  cursor: pointer;

  &:hover {
    color: #ff1446;
  }

  & svg {
    height: 24px;
    width: 24px;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    color: currentColor;
    min-width: 16px;
    touch-action: manipulation;
    transform-origin: center center;
  }
`;

const ReviewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

type reviewType = {
  _id: number,
  idArticle: string,
  userName: string,
  message: string,
  complete: boolean,
}

interface ReviewBoxProps {
  reviewsArticle: reviewType[];
  countReviews: number;
  subtitle: string;
}

export const ReviewBox: React.FC<ReviewBoxProps> = ({ reviewsArticle, countReviews, subtitle }) => {
  return (
    <ReviewBoxWrapper>
      <ReviewBoxHeaderContainer>
        <ReviewBoxHeaderTitleContainer>
          <ReviewBoxHeaderTitle>
            Отзывы
            <ReviewBoxTotalContainer>
              {countReviews}
            </ReviewBoxTotalContainer>
          </ReviewBoxHeaderTitle>
          <ReviewBoxHeaderSubTitle>
            {subtitle}
          </ReviewBoxHeaderSubTitle>
        </ReviewBoxHeaderTitleContainer>
        <ReviewAllLink to="/review">
          Все отзывы
          <ArrowLeftSvg />
        </ReviewAllLink>
      </ReviewBoxHeaderContainer>
      <ReviewContentContainer>
        <ReviewItems reviews={reviewsArticle} />
      </ReviewContentContainer>
    </ReviewBoxWrapper>
  );
};
