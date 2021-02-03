import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BtnCloseSvg } from '../../assets/images/widget/btn-close.svg';
import { DoctorType } from '../../types';
import { AlertError, AlertSuccess } from '../Header/styledComponents';
import emailjs from 'emailjs-com';

const Overlay = styled.div`
  display: block;
  opacity: ${props => props.isOpen ? '1' : '0'};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255,255,255,.7);
  z-index: 12;
  transition: all 20s ease; 
`;

const BookingWidgetWrapper = styled.div`
  width: 501px;
  height: 100%;
  position: fixed;
  right: ${props => props.isOpen ? '0' : '-501px'};
  top: 0;
  background: #fff;
  border-left: 1px solid #979797;
  z-index: 13;
  transition: all 20s ease; 

  @media only screen and (min-width: 0) and (max-width: 510px) {
    width: 301px;
  }
`;

const BookingWidget = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: border-box;
  font-family: system-ui;
`;

const WidgetHeader = styled.div`
  padding: 24px 50px 21px;
  height: 96px;
  width: 100%;
  border-bottom: 1px solid #000;
  text-align: center;
  flex-grow: 1;
  flex-shrink: 0;
`;

const WidgetHeaderSubtitle = styled.div`
  padding-bottom: 2px;
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 0, 0, .7);
  text-transform: uppercase;
`;

const WidgetHeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #000;
  font-size: 24px;
  line-height: 32px;
`;

const WidgetBtnClose = styled.div`
  padding: 10px;
  display: flex;
  left: -36px;
  align-items: center;
  font-size: 10px;
  position: absolute;
  z-index: 1;
  cursor: pointer;

  & svg {
    fill: #000;
  }

  & svg:hover {
    fill: #ff1446;
  }
`;

const WidgetTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const WidgetContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  overflow-y: auto;
`;

const ServiceContainer = styled.div`
  position: relative;
  padding: 16px 16px 40px;
  background-color: #fafafa;
`;

const ServiceCategory = styled.div`
  min-height: 64px;
  width: 100%;
  padding: 12px 14px 12px 16px;
  background-color: #fff;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 11%);
  margin-bottom: 16px;
  border: 0 solid #fff;
  border-radius: 4px;
  text-align: left;
`;

const ServiceInfo = styled(ServiceCategory)`
  padding: 0;
`;

const ServiceInfoContainer = styled.div`
  width: 100%;
  padding: 12px 14px 12px 16px;
  display: flex;
  align-items: center;
`;

const ServiceInfoContent = styled.div`
  width: 100%;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 16px;
  justify-content: center;
`;

const ContentInfoName = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  opacity: .8;
`;

const ContentInfoSpeciality = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000;
  opacity: .48;
  margin-top: 4px;
  margin-bottom: 8px;
`;

const ServiceInfoAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ContentAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const FormContainer = styled.div`
  border-top: 1px solid rgba(0,0,0,.08);
  padding: 24px 16px 0;
`;

const Form = styled.form`
  overflow: scroll;
  min-height: 520px;
`;

const LabelName = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  height: 48px;
  width: 100%;
  padding: 11px 16px;
  margin-bottom: 15px;
  border: 1px solid ${props => props.isError ? '#ff1446' : 'rgba(0,0,0,.16)'};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 16px;
  font-family: inherit;
  outline: 0;
  box-shadow: none;

  &:hover {
    border-color: rgba(0,0,0,.8);
    box-shadow: none;
  }
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 32px 0;
`;

const SubmitButton = styled.button`
  padding: 15px 37px;
  cursor: pointer;
  background-color: #46cdd6;
  color: #fff;
  border: 0;
  border-radius: 4px;
  outline: 0;
  width: auto;
  margin-bottom: 0;
  line-height: normal;
  font-size: 15px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .8px;
  font-weight: 600;

  &:hover {
    background-color: #70d8df;
  }
`;

const TextArea = styled.textarea`
  resize: none;
  height: auto;
  min-height: 90px;
  width: 100%;
  padding: 11px 16px;
  border: 1px solid ${props => props.isError ? '#ff1446' : 'rgba(0,0,0,.16)'};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 24px;
  position: relative;
  font-family: inherit;
  outline: 0;
  box-shadow: none;

  &:hover {
    border-color: rgba(0,0,0,.8);
    box-shadow: none;
  }
`;

const StyledAlertError = styled(AlertError)`
  margin-top: 0;
  margin-bottom: 5px;
`;

interface BookingWidgetOnlineProps {
  personalInfo: DoctorType;
  isOpen: boolean;
  toggleOpenWidget: () => void;
}

const BookingWidgetOnline: React.FC<BookingWidgetOnlineProps> = ({ personalInfo, isOpen, toggleOpenWidget }) => {
  const { pictures, name, profession, experience, category, placeWork } = personalInfo;
  const [isErrorName, setErrorName] = useState('');
  const [isErrorText, setErrorText] = useState('');
  const [isErrorPhone, setErrorPhone] = useState('');
  const [isSuccess, setSuccess] = useState('');
  const [isError, setError] = useState('');
  const [userInputBooking, setUserInputBooking] = useState({
    nameUser: '',
    text: '',
    phone: '',
  });

  const changeUserName = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInputBooking(() => ({ ...userInputBooking, 'nameUser': event.target.value }));
    setErrorName('');
  };

  const changeUserPhone = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInputBooking(() => ({ ...userInputBooking, 'phone': event.target.value }));
    setErrorPhone('');
  };

  const changeUserText = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInputBooking(() => ({ ...userInputBooking, 'text': event.target.value }));
    setErrorText('');
  };

  const handleSubmitForm = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { nameUser, phone, text } = userInputBooking;
    const minTextLength = 4;


    switch (true) {
      case (/\d/.test(name)): {
        setErrorName('This field is invalid');
        break;
      }
      case (text.length < minTextLength): {
        setErrorText('This field is required');
        break;
      }
      case (!/^\d{10,12}$/.test(phone)): {
        setErrorPhone('Пример: 380990467780');
        break;
      }
      default: {
        emailjs.send("service_qp93pei", "template_50xktp7", {
          from_name: "rsclonedefault@gmail.com",
          to_name: `Запись к доктору ${name} из ${placeWork}`,
          message: `Добрый день! Меня зовут, ${nameUser}! 
            Пожалуйста, свяжитесь со мной: ${phone}. 
            Данные для записи: ${text}`,
        }, 'user_Byn4mRCUn0EZbJWxvefwH')
          .then(() => {
            setSuccess(`Добрый день, ${nameUser}. Мы свяжемся с вами в течении часа, чтобы подтвердить бронирование`);
          })
          .catch((error) => {
            setError(`Не удалось сделать запись! Попробуйте еще раз, после перезагрузки страницы. ${error.text}`);

            setTimeout(() => setError(''), 500);
          });
      }
    }
  };

  return (
    <Overlay isOpen={isOpen}>
      <BookingWidgetWrapper isOpen={isOpen}>
        <BookingWidget>
          <WidgetHeader>
            <WidgetHeaderSubtitle>
              Онлайн запись
            </WidgetHeaderSubtitle>
            <WidgetHeaderTitleContainer>
              <WidgetBtnClose onClick={() => toggleOpenWidget()}>
                <BtnCloseSvg />
              </WidgetBtnClose>
              <WidgetTitle>
                Частный кабинет&nbsp;
                {profession.slice(0, -1)}&nbsp;
                {name}
              </WidgetTitle>
            </WidgetHeaderTitleContainer>
          </WidgetHeader>
          <WidgetContentContainer>
            <ServiceContainer>
              <ServiceCategory>
                {profession}
              </ServiceCategory>
              <ServiceInfo>
                <ServiceInfoContainer>
                  <ServiceInfoContent>
                    <ContentInfo>
                      <ContentInfoName>
                        {name}
                      </ContentInfoName>
                      <ContentInfoSpeciality>
                        {category}
                        &nbsp;&nbsp;•&nbsp;&nbsp;
                        {experience}
                      </ContentInfoSpeciality>
                    </ContentInfo>
                    <ServiceInfoAvatarContainer>
                      <ContentAvatar
                        src={pictures ? pictures[0] : ''}
                        alt={name}
                      />
                    </ServiceInfoAvatarContainer>
                  </ServiceInfoContent>
                </ServiceInfoContainer>
              </ServiceInfo>
            </ServiceContainer>
            <FormContainer>
              <Form onSubmit={handleSubmitForm}>
                <LabelName>
                  Ваше имя
                </LabelName>
                <Input
                  type='text'
                  name='first_name'
                  required
                  placeholder='Имя'
                  isError={isErrorName}
                  value={userInputBooking.nameUser}
                  onChange={changeUserName}
                />
                {isErrorName && <StyledAlertError>{isErrorName}</StyledAlertError>}
                <LabelName>
                  Контактные данные
                </LabelName>
                <Input
                  type='phone'
                  name='phone'
                  required
                  placeholder='Телефон'
                  isError={isErrorPhone}
                  value={userInputBooking.phone}
                  onChange={changeUserPhone}
                />
                {isErrorPhone && <StyledAlertError>{isErrorPhone}</StyledAlertError>}
                <LabelName>
                  Время записи:
                </LabelName>
                <TextArea
                  maxLength='1000'
                  name='user_comment'
                  placeholder='Например, сегодня после 18-00 или завтра после 19-00'
                  title='This field is required'
                  isError={isErrorText}
                  value={userInputBooking.text}
                  onChange={changeUserText}
                />
                {isErrorText && <StyledAlertError>{isErrorText}</StyledAlertError>}
                <SubmitButtonContainer>
                  <SubmitButton
                    type='submit'
                    value='Записаться'
                  >
                    Записаться
                  </SubmitButton>
                </SubmitButtonContainer>
              </Form>
            </FormContainer>
            {isSuccess && <AlertSuccess>{isSuccess}</AlertSuccess>}
            {isError && <AlertError>{isError}</AlertError>}
          </WidgetContentContainer>
        </BookingWidget>
      </BookingWidgetWrapper>
    </Overlay>
  );
};

export default BookingWidgetOnline;

// doctor
// category: "Первая категория, Кандидат медицинских наук"
// city: "Минск"
// complete: true
// country: "Беларусь"
// education: null
// experience: "33 года"
// idWork: "600e0b815ce4c700172e327a"
// name: "Осипова Антонина Владимировна"
// pictures: null
// placeWork: "Реабилитационный центр «Элеос»"
// profession: "Аллерголог"
// section: "Аллерголог"
// tel: null
// _id: "600057d2eb627b03cc021f90"

//clinic
// address: "ул. Ленина, 9"
// city: "Минск"
// complete: true
// coordinates: (2)[53.900167, 27.560259]
// country: "Беларусь"
// description: "С центром пластической хирургии «Эдаран-Медикал» вы сможете добиться любых поставленных целей и осуществить все ваши желания, связанные с внешностью и красотой. Специалисты, работающие у нас, с удовольствием помогут вам выбрать подходящие для вас процедуры, подобрать нужного врача, а также получить всю необходимую информацию и консультацию."
// personnelID: (3)["600df80a5ce4c700172e3268", "600df9df5ce4c700172e3269", "600dfadb5ce4c700172e326a"]
// pictures: (5)["https://ms1.103.by/images/80c4e9b074738e185f00852f…ogo/dd/9b/4b/dd9b4bedeca37704e1e816cf2b97f183.jpg", "https://ms1.103.by/images/f831173f783a28436777112a…oto/da/8e/5a/da8e5a5907c4691bcc83753d460890e7.jpg", "https://ms1.103.by/images/f831173f783a28436777112a…oto/49/8e/71/498e71eaa4ace150d8d75548a45df166.jpg", "https://ms1.103.by/images/f831173f783a28436777112a…oto/24/e4/5a/24e45a2eee8b9c5e5251f32ab77938d0.jpg", "https://ms1.103.by/images/f831173f783a28436777112a…oto/a2/80/c5/a280c586c55f875f9d23aa941b6ab7e8.jpg"]
// section: "Медицинские центры и услуги"
// subsection: "Центры пластической хирургии"
// tel: "+37529-222-12-12"
// title: "Центр пластической хирургии «Эдаран-Медикал»"
// workingHours: "8.00 - 20.00"
// _id: "60005084eb627b03cc021f79"