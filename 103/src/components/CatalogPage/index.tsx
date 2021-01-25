import React from 'react';
import styled from 'styled-components';
import { BackButton } from '../../Header/styledComponents';
import FeedbackForm from '../FeadbackForm';

const CatalogPageWrapper = styled.div`
  margin: 0 auto;
  padding: 35px 0 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    right: 300px;
    top: 0;
    z-index: 2;
    bottom: -30px;
    // border-right: 1px solid #e6e6e6;
  }

  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
    overflow: visible;
    width: 90%;
  }
`;

const BackLink = styled(BackButton)`
  color: rgba(0,0,0,.5);
  font: 400 12px/16px Roboto;
  text-transform: uppercase;

  &:hover {
    color: #000;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 32px;
  margin-top: 8px;
`;

const Title = styled.h1`
  margin: 0;
  font: 600 30px/36px Roboto;
`;

const ArticleAboutDescription = styled.div`
  padding: 15px 0 0;
`;

const Description = styled.span`
  font: 400 13px/16px Roboto;
  color: rgba(0,0,0,.5);
  display: inline-block;
  margin: 0 14px 0 0;
`;

const CountView = styled.span`
  display: inline-block;
  font: 400 13px/16px Roboto;
  text-decoration: none;
  color: rgba(0,0,0,.5);

  & svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    fill-opacity: .5;
    margin-right: 8px;
    vertical-align: bottom;
  }
`;

const BodyTextContainer = styled.div`
  font-size: 15px;
  font-family: Roboto;
  line-height: 24px;
  font-style: normal;
  font-weight: 400;

  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
`;

const ArticleText = styled.p`
  margin: 20px 0;
  font: 400 18px/28px Roboto;
  color: rgba(0,0,0,.9);
`;

const ImgContainer = styled.div`
  width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin-top: 32px;
  margin-bottom: 32px;

  & img {
    max-width: 1140px;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 1000px) {
    width: 100vw;
  }
`;

const BorderBottom = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

interface CatalogPageProps {
  title: string;
  authorName: string;
  articleDate: string;
  countViewPost: number;
  headerArticle: string;
  imgSrc: string;
  imgTitle: string;
}

const CatalogPage: React.FC<CatalogPageProps> = ({ title, authorName, articleDate, countViewPost, headerArticle, imgSrc, imgTitle }) => {
  return (
    <>
      <CatalogPageWrapper>
        <BackLink to='/'>
          Back to Journal
        </BackLink>
        <TitleContainer>
          <Title>
            {title}
          </Title>
          <ArticleAboutDescription>
            <Description>
              <b>Text</b>
              {authorName}
              {articleDate}
            </Description>
            <CountView>
              <svg id="icon-eye-open" viewBox="0 0 16 16">
                <g
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M8.1 3C2.1 3 0 8 0 8s2.1 5 8.1 5c6.1 0 7.9-5 7.9-5s-1.7-5-7.9-5zm.1 8.9C6 11.9 4.3 10.2 4.3 8S6 4.1 8.2 4.1s3.9 1.7 3.9 3.9-1.8 3.9-3.9 3.9z" />
                  <circle
                    cx="8.1"
                    cy="8"
                    r="1.7"
                  />
                </g>
              </svg>
              {countViewPost}
            </CountView>
          </ArticleAboutDescription>
        </TitleContainer>
        <BodyTextContainer>
          <ArticleText>
            <b>
              {headerArticle}
            </b>
          </ArticleText>
          <ImgContainer>
            <img src={imgSrc} alt={imgTitle} />
          </ImgContainer>
        </BodyTextContainer>
      </CatalogPageWrapper>
      <BorderBottom />
      <FeedbackForm />
    </>
  );
};

export default CatalogPage;
