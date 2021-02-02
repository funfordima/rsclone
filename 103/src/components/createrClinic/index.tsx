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
    &.creater-clinic__text_large {
        font-size: 16px;
        text-align: center;
        color: rgb(0, 0, 0);
        @media only screen and (max-width: 767px) and (min-width: 0) {
            display: inline-block;
        }
    }
`;

const CreaterPopupWrap = styled.div`
    z-index: 11;
    position: fixed;
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
    &.creater-clinic__popup_opened {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const CreaterPopup = styled.div`
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
    &.creater-clinic__window {
        width: 50vw;
        height: 40vh;
    }
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

const CreaterPopupButton = styled.button`
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
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [country, setСountry] = useState("");
    const [city, setCity] = useState("");
    const [section, setSection] = useState("");
    const [subsection, setSubsection] = useState("");
    const [address, setAddress] = useState("");
    const [title, setTitle] = useState("");
    const [workingHours, setWorkingHours] = useState("");
    const [tel, setTel] = useState("");
    const [description, setDescription] = useState("");
    const openPopup = (event: React.MouseEvent<HTMLDivElement, MouseEvent> & { target: Element }) => {
        event.preventDefault();
        if (event.target.tagName === 'FORM' || event.target.tagName === 'INPUT' || event.target.tagName === 'BUTTON') return;
        setIsOpenForm(!isOpenForm);
    }

    const submitForm = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (!section.trim() || !subsection.trim() || !title.trim() ||
        !country.trim() || !city.trim() || !address.trim() || !workingHours.trim()
        || !tel.trim() || !description.trim()) {
            alert('Все поля обязательны для заполнения');
            return;
        }
        const clinic  = {
            section: section,
            subsection: subsection,
            title: title,
            country: country,
            city: city,
            address: address,
            workingHours: workingHours,
            tel: tel,
            description: description,
            personnelID: null,
            coordinates: null,
            complete: false
        };

        const req = async () => await fetch('https://rs-wars-clone.herokuapp.com/clinics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(clinic)
        });

        req();

        setСountry("");
        setCity("");
        setSection("");
        setSubsection("");
        setAddress("");
        setTitle("");
        setWorkingHours("");
        setTel("");
        setDescription("");
        setIsOpenForm(false);
        setIsOpenPopup(true);
    }

    return (
        <CreaterWrapper className="creater-clinic">
            <CreaterText className="creater-clinic__text">
                Не нашли компанию в каталоге?
            </CreaterText>
            <CreaterButton className="creater-clinic__btn" onClick={ openPopup }>
                Добавить компанию
            </CreaterButton>
            <CreaterPopupWrap className={ isOpenForm ? "creater-clinic__popup creater-clinic__popup__opened" : "creater-clinic__popup"} onClick={ openPopup }>
                <CreaterPopup className="creater-clinic__form">
                    <CreaterInput type="text" onChange={ (e) => setСountry(e.target.value) } placeholder="* Страна" required value={ country } />
                    <CreaterInput type="text" onChange={ (e) => setCity(e.target.value) } placeholder="* Город" required value={ city } />
                    <CreaterInput type="text" onChange={ (e) => setSection(e.target.value) } placeholder="* Категория" required value={ section } />
                    <CreaterInput type="text" onChange={ (e) => setSubsection(e.target.value) } placeholder="* Специализация" required value={ subsection } />
                    <CreaterInput type="text" onChange={ (e) => setTitle(e.target.value) } placeholder="* Название" required value={ title } />
                    <CreaterInput type="text" onChange={ (e) => setAddress(e.target.value) } placeholder="* Андрес" required value={ address } />
                    <CreaterInput type="text" onChange={ (e) => setWorkingHours(e.target.value) } placeholder="* Часы работы (8.00 - 12.00)" required value={ workingHours } />
                    <CreaterInput type="text" onChange={ (e) => setTel(e.target.value) } placeholder="* Контактный телефон" required value={ tel } />
                    <CreaterInput type="text" onChange={ (e) => setDescription(e.target.value) } placeholder="* Описание" required value={ description } />
                    <CreaterPopupButton className="creater-clinic__btn" type="submit" onClick={ submitForm }>
                        Отправить
                    </CreaterPopupButton>
                </CreaterPopup>
            </CreaterPopupWrap>
            <CreaterPopupWrap className={ isOpenPopup ? "creater-clinic__popup creater-clinic__popup_opened" : "creater-clinic__popup"}>
                <CreaterPopup className="creater-clinic__window">
                    <CreaterText className="creater-clinic__text_large">
                        В ближашее время с вами свяжется администратор для уточнения информации.
                        Компания появится в списке с пометкой &quot;на проверке&quot;.
                    </CreaterText>
                    <CreaterPopupButton type="button" onClick={() => setIsOpenPopup(false)}>
                        ок
                    </CreaterPopupButton>
                </CreaterPopup>
            </CreaterPopupWrap>
        </CreaterWrapper>
    )
}

export default CreaterClinic;
