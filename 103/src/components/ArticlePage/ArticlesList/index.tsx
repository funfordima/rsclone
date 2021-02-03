import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as EyeOpenSvg } from '../../Header/public/visibility.svg';
import { ArticleType } from '../../../types';

const ArticlesListElement = styled.ul`
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1209px) {
    justify-content: space-evenly;
  }

  @media (max-width: 959px) {
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ArticleListItem = styled.li`
  box-sizing: border-box;
  position: relative;
  margin-bottom: 40px;
  padding: 0 24px 55px;
  width: 280px;
  border-radius: 2px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  background-clip: padding-box;
  list-style-type: none;

  @media (max-width: 959px) {
    justify-content: space-between;
    &:last-child {
      align-items: flex-start;
    }
  }
`;

const ArticleListImgLink = styled(NavLink)`
  margin-left: -24px;
  margin-right: -24px;
  margin-bottom: 24px;
  display: block;
  position: relative;
  box-sizing: border-box;
  font-size: 0;
  text-decoration: none;

  &: hover {
    color: #ff1446;
  }
`;

const ArticleImg = styled.img`
  width: 100%;
  height: 186px;
  vertical-align: bottom;
  border-radius: 2px 2px 0 0;
  transition: opacity 0.2s ease-out;
  opacity: 1;

  &:hover {
    opacity: 0.7;
  }
`;

const BackToMainArticleLink = styled(NavLink)`
  margin-top: 24px;
  font: 700 11px/12px Roboto;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  display: block;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  font-family: Verdana, sans-serif;

  &:hover {
    color: #ff1446;
  }
`;

const TitleArticleLink = styled(NavLink)`
  display: block;
  margin-top: 16px;
  max-height: 96px;
  font: 400 16px/24px Roboto;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
  text-transform: none;
  font-family: Verdana, sans-serif;

  &:hover {
    color: #ff1446;
  }
`;

const ViewCountContainer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  line-height: 16px;
  padding-top: 16px;
`;

const ViewCount = styled.span`
  width: 100%;
  display: inline-flex;
  align-items: end;
  color: rgba(0, 0, 0, 0.5);
  font: 400 14px/16px Roboto;

  & svg {
    width: 16px;
    fill: currentColor;
    fill-opacity: 0.5;
    margin-right: 8px;
    vertical-align: bottom;
  }
`;

interface ArticlesListProps {
  articles: ArticleType[];
  setIdForCatalogPage: (id: string) => void;
}

const ArticlesList: React.FC<ArticlesListProps> = ({
  articles,
  setIdForCatalogPage,
}) => {
  return (
    <ArticlesListElement>
      {articles.map(({ title, src, _id, countView }) => {
        return (
          <ArticleListItem key={_id}>
            <ArticleListImgLink
              to={`journal/article`}
              onClick={() => setIdForCatalogPage(_id)}
            >
              <ArticleImg src={src ? src : ''} alt={title} />
            </ArticleListImgLink>
            <BackToMainArticleLink to="/journal">Журнал</BackToMainArticleLink>
            <TitleArticleLink
              to={`journal/article`}
              onClick={() => setIdForCatalogPage(_id)}
            >
              {title}
            </TitleArticleLink>
            <ViewCountContainer>
              <ViewCount>
                <EyeOpenSvg />
                {countView}
              </ViewCount>
            </ViewCountContainer>
          </ArticleListItem>
        );
      })}
    </ArticlesListElement>
  );
};

export default ArticlesList;
