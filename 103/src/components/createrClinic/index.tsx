import React, { useState } from 'react';
import styled from 'styled-components';

const CreaterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: rgba(0, 0, 0, .04);
    width: 100vw;
    height: auto;
    overflow: hidden;
`;

const CreaterText = styled.p`
    font-size: 14px;
    line-height: 1.5;
    color: rgb(123, 121, 121);
    @media only screen and (max-width: 767px) and (min-width: 0) {
        display: none;
    }
`;

const CreaterFormWrap = styled.div`
    z-index: 11;
    position: absolute;
    top: 0;
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .6);
    &.creater-clinic__popup__opened {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const CreaterForm = styled.form`
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    width: 50vw;
    height: 80vh;
    background-color: #ffffff;
    border-radius: 8px;
`

const CreaterInput = styled.input`
    margin-bottom: 20px;
    padding-left: 10px;
    display: block;
    width: 100%;
    height: 30px;
    border: 1px solid rgba(144, 137, 137, 60%);
    border-radius: 3px;
    :focus {
        outline: none;
        border: 1px solid #abe7f7d9;
    }
`

const CreaterButton = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 8px 10px;
    width: 200px;
    height: 60px;
    color: #46cdd6;
    border: 1px solid rgba(70,205,214,.48);
    background-color: transparent;
    transition-property: box-shadow;
    box-shadow: 0 4px 8px transparent;
    font-size: 13px;
    border-radius: 8px;
    cursor: pointer;
    :hover {
        background-color: transparent;
        border-color: rgba(70,205,214,.48);
        box-shadow: 0 4px 8px rgba(70,205,214,.24);
        color: #46cdd6;
    }
`

const CreaterFormButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 8px 10px;
    width: 200px;
    height: 50px;
    color: #ffffff;
    background-color: #f15151;
    transition-property: box-shadow;
    box-shadow: 0 4px 8px transparent;
    font-size: 16px;
    border-radius: 8px;
    border: 0px solid;
    outline: none;
    cursor: pointer;
    :hover {
        color: #ecececc9;
        border: 0px solid;
        outline: none;
    }
    :focus {
        border: 0px solid;
        outline: none;
    }
`

const CreaterClinic: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = (event: React.MouseEvent<HTMLDivElement, MouseEvent> & { target: Element }) => {
        event.preventDefault();
        if (event.target.tagName === 'FORM' || event.target.tagName === 'INPUT' || event.target.tagName === 'BUTTON') return;
        setIsOpen(!isOpen);
    }

    const submitForm = (event: React.MouseEvent<HTMLDivElement, MouseEvent> & { target: Element }) => {
        event.preventDefault();
        if (event.target.tagName === 'FORM' || event.target.tagName === 'INPUT' || event.target.tagName === 'BUTTON') return;
        setIsOpen(!isOpen);
    }

    return (
        <CreaterWrapper className="creater-clinic">
            <CreaterText className="creater-clinic__text">
                Не нашли компанию в каталоге?
            </CreaterText>
            <CreaterButton className="creater-clinic__btn" onClick={ openPopup }>
                Добавить компанию
            </CreaterButton>
            <CreaterFormWrap className={ isOpen ? "creater-clinic__popup creater-clinic__popup__opened" : "creater-clinic__popup"} onClick={ openPopup }>
                <CreaterForm>
                    <CreaterInput type="text" placeholder="Страна" />
                    <CreaterInput type="text" placeholder="Город" />
                    <CreaterInput type="text" placeholder="Название" />
                    <CreaterInput type="text" placeholder="Категория" />
                    <CreaterInput type="text" placeholder="Город" />
                    <CreaterInput type="text" placeholder="Андрес" />
                    <CreaterInput type="text" placeholder="Часы работы" />
                    <CreaterInput type="text" placeholder="Контактный телефон" />
                    <CreaterInput type="text" placeholder="Описание" />
                    <CreaterFormButton onClick={ submitForm }>
                        Отправить
                    </CreaterFormButton>
                </CreaterForm>
            </CreaterFormWrap>
        </CreaterWrapper>
    )
}

export default CreaterClinic;
