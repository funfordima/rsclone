import React from 'react';
import styled from 'styled-components';
import CreateHeader from '../../Header/CreateHeader';
import Navigation from '../../Navigation';
import { Category } from '../../../types';
import { BackButton } from '../../Header/styledComponents';
import { ReviewsAllPageItems } from './ReviewsAllPageItems';
import { Comment } from '../../../types';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;

  @media (max-width: 960px) {
    max-width: 640px;
    width: 90%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font: 600 30px/32px Roboto;
  text-transform: uppercase;
  letter-spacing: .05em;
  margin: 8px 0;
`;

const BackLink = styled(BackButton)`
  color: rgba(0,0,0,.5);
  font: 400 12px/16px Roboto;
  text-transform: uppercase;

  &:hover {
    color: #000;
  }
`;

const ReviewBoxTotalContainer = styled.span`
  margin-left: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: rgba(0,0,0,.48);
`;

const ReviewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

type dataType = {
  _id: string,
  subtitle: string | null,
}

interface ReviewsAllPageProps {
  dataCategory: Category[];
  setCurrentPageId: (_id: string | null) => void;
  reviews: Comment[];
  dataArticlesAllId: dataType[];
}

export const ReviewsAllPage: React.FC<ReviewsAllPageProps> = ({ dataCategory, setCurrentPageId, reviews, dataArticlesAllId }) => {
  return (
    <>
      <CreateHeader />
      <Navigation categoriesList={dataCategory} setCurrentPageId={setCurrentPageId} />
      <Wrapper>
        <BackLink to='/journal'>
          Back to Journal
        </BackLink>
        <Container>
          <HeaderContainer>
            <Title>
              Отзывы
          </Title>
            <ReviewBoxTotalContainer>
              {dataArticlesAllId.length}
            </ReviewBoxTotalContainer>
          </HeaderContainer>
          <ReviewContentContainer>
            <ReviewsAllPageItems allReviews={reviews} dataArticlesAllId={dataArticlesAllId} />
          </ReviewContentContainer>
        </Container>
      </Wrapper>
    </>
  );
};
