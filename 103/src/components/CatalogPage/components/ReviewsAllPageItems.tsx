import React from 'react';
import styled from 'styled-components';
import { ReviewItems } from './ReviewItems';
import { Comment } from '../../../types';

const ReviewContentRow = styled.div`
  max-width: 760px;
`;

const ReviewSubTitle = styled.span`
  flex: 0 0 100%;
  font-size: 13px;
  line-height: 16px;
  color: rgba(0,0,0,.48);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

type dataType = {
  _id: string,
  subtitle: string | null,
}

interface ReviewsAllPageItemsProps {
  allReviews: Comment[];
  dataArticlesAllId: dataType[];
}

export const ReviewsAllPageItems: React.FC<ReviewsAllPageItemsProps> = ({ allReviews, dataArticlesAllId }) => {
  return (
    <>
      {
        dataArticlesAllId.map(({ _id, subtitle }) => {
          return (
            <ReviewContentRow key={_id}>
              <ReviewSubTitle>
                {subtitle}
              </ReviewSubTitle>
              <ReviewItems reviews={allReviews.filter((reviewArticle) => reviewArticle.idArticle === _id)} />
            </ReviewContentRow>
          );
        })
      }
    </>
  );
};
