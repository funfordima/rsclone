import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SuccessSvg } from '../../Header/public/success.svg';

const ReviewItemElement = styled.div`
  padding: 16px 24px;  
  display: block;
  box-sizing: border-box;
`;

const ReviewTime = styled.time`
  float: left;
  margin-top: 4px;
  font-size: 11px;
  line-height: 20px;
  letter-spacing: .8px;
  text-transform: uppercase;
  color: rgba(0,0,0,.48);

  @media only screen and (min-width: 0) and (max-width: 767px){
    display: none;
  }
`;

const Review = styled.div`
  padding-left: 160px;
  position: relative;

  @media only screen and (min-width: 0) and (max-width: 767px) {
    padding-left: 10px;
  }
`;

const ReviewHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  overflow: hidden;
  margin-bottom: 2px;
`;

const ReviewHeaderRow = styled.div`
  min-width: 0;

  @media only screen and (min-width: 0) and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }  
`;

const ReviewMetadata = styled.div`
  display: flex;
  flex: 1;
  margin-left: 24px;
  align-items: center;
  justify-content: flex-end;
`;

const ReviewDone = styled.div`
  font-size: 13px;
  line-height: 20px;
  white-space: nowrap;

  & svg {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    color: currentColor;
    width: 16px;
    min-width: 16px;
    height: 16px;
    touch-action: manipulation;
    transform-origin: center center;
  }
`;

const ReviewAuthor = styled.div`
  max-width: 100%;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
  opacity: .8;
  overflow: hidden;

  &+time {
    display: none;

    @media only screen and (min-width: 0) and (max-width: 767px) {
      display: block;
    }
  }
`;

const ReviewBodyContainer = styled.div`
  font-size: 15px;
  line-height: 24px;
  color: rgba(0,0,0,.8);
  white-space: pre-wrap;
`;

type reviewType = {
  _id: number,
  idArticle: string,
  userName: string,
  message: string,
  complete: boolean,
}

interface ReviewItemsProps {
  reviews: reviewType[];
}

export const ReviewItems: React.FC<ReviewItemsProps> = ({ reviews }) => {
  return (
    <>
      {reviews.map(({ _id, userName, message, complete }) => {
        return (
          <ReviewItemElement key={_id}>
            <ReviewTime>
              Time
            </ReviewTime>
            <Review>
              <ReviewHeaderContainer>
                <ReviewHeaderRow>
                  <ReviewAuthor>
                    {userName}
                  </ReviewAuthor>
                  <ReviewTime>
                    12-05-20
                  </ReviewTime>
                </ReviewHeaderRow>
                <ReviewMetadata>
                  <ReviewDone>
                    {complete && <SuccessSvg />}
                  </ReviewDone>
                </ReviewMetadata>
              </ReviewHeaderContainer>
              <ReviewBodyContainer>
                {message}
              </ReviewBodyContainer>
            </Review>
          </ReviewItemElement>
        );
      })}
    </>
  );
};
