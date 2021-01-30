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
`;

const Review = styled.div`
  padding-left: 160px;
  position: relative;
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
  }
`;

const ReviewBodyContainer = styled.div`
  font-size: 15px;
  line-height: 24px;
  color: rgba(0,0,0,.8);
  white-space: pre-wrap;
`;

// Review
// complete: true
// idArticle: "600b45c355149397bef9685e"
// message: "Эта статья воодушевила меня обратиться к неврологу! Точно про меня."
// userName: "Анна Проценко"
// _id: "6014164b5f851e0be3a05427"

// Comment
// complete: true
// countView: 74
// src: "https://static.103.ua/images/common/wysiwyg/2021/01/a368beef7705709f558a9613be3c0447.jpg"
// subtitle: "Текст: Тылец Александра, 21 января"
// text: "Часто пациенты с приступами паники вынуждены обращаться к профильным врачам, чтобы избавиться от сопутствующих последствий этих состояний. У некоторых на пике паники подскакивает давление, возникают боли в сердце и учащенное сердцебиение. А кому-то во время приступа не хватает воздуха, так что появляется ощущение удушья. Врач-невролог Анатолий Нимчук дал несколько советов, как действовать во время панической атаки.↵Дышите глубоко и медленно. Во время приступа паники дыхание ускоряется, и содержание углекислого газа в крови снижается. Это дает ощущение оторванности от реальности, прострации. Медленное глубокое дыхание, наоборот, уменьшает проявления панического приступа. ↵Еще одна распространенная практика — дыхание в полиэтиленовый или бумажный пакет. Осознайте, что у вас лишь приступ паники. Это позволит избавиться от боязни умереть от сердечного приступа, ведь страх будет не таким обоснованным.Если вокруг вас много людей или шумно, попробуйте закрыть глаза.↵Сфокусируйте свое внимание на чем-то абсолютно реальном, например, на разминании ткани ваших джинсов или ковырянии ботинком земли. Это уменьшит чувство оторванности от реальности.↵Попробуйте методику расслабления мышц . Это похоже на глубокое дыхание. Вы просто пытаетесь сфокусироваться на последовательном расслаблении отдельных групп мышц, например, мышц каждого из пальцев.↵Попробуйте перенестись в место, о котором вы мечтали или где бывали. Это может быть какой-то экзотический пляж или живописные горы.↵Свет. Попробуйте во время атаки выйти на улицу или в хорошо освещенное помещение. Свет способствует повышению уровня эндорфинов, и это действует успокаивающе.↵Всегда носите с собой лавандовое масло. Во время панической атаки нанесите немного масла на запястье и некоторое время вдыхайте успокаивающий лавандовый запах."
// title: "Как бороться с паническими атаками? Советы невролога"
// _id: "600b45c355149397bef9685e"


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
      {reviews.map(({ _id, idArticle, userName, message, complete }) => {
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
