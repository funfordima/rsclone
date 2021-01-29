import React from 'react';
import styled from 'styled-components';
import ArticleList from './ArticlesList';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
`;

const Title = styled.h1`
  font: 600 30px/32px Roboto;
  text-transform: uppercase;
  letter-spacing: .05em;
  margin: 8px 0;
`;

const BodyArticles = styled.div`

`;

const ArticlePage: React.FC = () => {
  const articles = [
    {
      title: 'Как бороться с паническими атаками? Советы невролога',
      subtitle: 'Текст: Тылец Александра, 21 января',
      text: 'Часто пациенты с приступами паники вынуждены обращаться к профильным врачам, чтобы избавиться от сопутствующих последствий этих состояний. У некоторых на пике паники подскакивает давление, возникают боли в сердце и учащенное сердцебиение. А кому-то во время приступа не хватает воздуха, так что появляется ощущение удушья. Врач-невролог Анатолий Нимчук дал несколько советов, как действовать во время панической атаки.',
      src: 'https://static.103.ua/images/common/wysiwyg/2021/01/a368beef7705709f558a9613be3c0447.jpg',
      complete: true,
      id: 1,
      linkSrc: '/profile',
      countView: 10,
    },
    {
      title: 'Как бороться с паническими атаками? Советы невролога',
      subtitle: 'Текст: Тылец Александра, 21 января',
      text: 'Часто пациенты с приступами паники вынуждены обращаться к профильным врачам, чтобы избавиться от сопутствующих последствий этих состояний. У некоторых на пике паники подскакивает давление, возникают боли в сердце и учащенное сердцебиение. А кому-то во время приступа не хватает воздуха, так что появляется ощущение удушья. Врач-невролог Анатолий Нимчук дал несколько советов, как действовать во время панической атаки.',
      src: 'https://static.103.ua/images/common/wysiwyg/2021/01/a368beef7705709f558a9613be3c0447.jpg',
      complete: false,
      id: 2,
      linkSrc: '/reset',
      countView: 15,
    },
    {
      title: 'Как бороться с паническими атаками? Советы невролога',
      subtitle: 'Текст: Тылец Александра, 21 января',
      text: 'Часто пациенты с приступами паники вынуждены обращаться к профильным врачам, чтобы избавиться от сопутствующих последствий этих состояний. У некоторых на пике паники подскакивает давление, возникают боли в сердце и учащенное сердцебиение. А кому-то во время приступа не хватает воздуха, так что появляется ощущение удушья. Врач-невролог Анатолий Нимчук дал несколько советов, как действовать во время панической атаки.',
      src: 'https://static.103.ua/images/common/wysiwyg/2021/01/a368beef7705709f558a9613be3c0447.jpg',
      complete: true,
      id: 3,
      linkSrc: '/authorization',
      countView: 17,
    },
  ];


  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <Title>
            Журнал
          </Title>
        </HeaderContainer>
        <BodyArticles>
          <ArticleList articles={articles} />
        </BodyArticles>
      </Container>
    </Wrapper>
  );
};

export default ArticlePage;
