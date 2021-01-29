import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as EyeOpenSvg } from '../../Header/public/visibility.svg';

const ArticlesListElement = styled.ul`
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
`;

const ArticleListItem = styled.li`
  margin-bottom: 40px;
  padding: 0 24px 55px;
  width: 280px;
  box-sizing: border-box;
  position: relative;
  border-radius: 2px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  background: #fff;
  background-clip: padding-box;
  list-style-type: none;
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
    color: #FF1446;
  }
`;

const ArticleImg = styled.img`
  width: 100%;
  vertical-align: bottom;
  border-radius: 2px 2px 0 0;
  transition: opacity .2s ease-out;
  opacity: 1;

  &:hover {
    opacity: .7;
  }
`;

const BackToMainArticleLink = styled(NavLink)`
  margin-top: 24px;
  font: 700 11px/12px Roboto;
  text-transform: uppercase;
  letter-spacing: .16em;
  display: block;
  text-decoration: none;
  color: rgba(0,0,0,.5);

  &:hover {
    color: #FF1446;
  }
`;

const TitleArticleLink = styled(NavLink)`
  display: block;
  margin-top: 16px;
  font: 400 18px/24px Roboto;
  text-decoration: none;
  color: rgba(0,0,0,.9);
  text-transform: none;

  &:hover {
    color: #FF1446;
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
  color: rgba(0,0,0,.5);
  font: 400 14px/16px Roboto;

  & svg {
    width: 16px;
    fill: currentColor;
    fill-opacity: .5;
    margin-right: 8px;
    vertical-align: bottom;
  }
`;

type ArticleType = {
  title: string,
  src: string,
  id: number,
  linkSrc: string,
  countView: number
}

interface ArticlesListProps {
  articles: ArticleType[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => {
  return (
    <ArticlesListElement>
      {articles.map(({ title, src, id, linkSrc, countView }) => {
        return (
          <ArticleListItem key={id}>
            <ArticleListImgLink to={linkSrc}>
              <ArticleImg
                src={src}
                alt={title}
              />
            </ArticleListImgLink>
            <BackToMainArticleLink to='/'>
              Журнал
            </BackToMainArticleLink>
            <TitleArticleLink to={linkSrc}>
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
