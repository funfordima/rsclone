import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import defaultUserAvatar from '../../assets/images/chatbot/defaultUserAvatar.png';
import HeaderForChatbot from './HeaderForChatbot';
import FormForChatbot from './FormForChatbot';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import emailjs from 'emailjs-com';

export const EnabledVolumeContext = React.createContext(false);

const SimpleChatbot: React.FC = () => {
  const user = firebase.auth().currentUser;

  // const storageRef = firebase.storage().ref().child(user?.email + '/profile.jpg');
  const userAvatar = user?.photoURL || defaultUserAvatar;
  const steps = [
    {
      id: "Greet",
      message: "Hello, I'm Anna!",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please type your name?",
      trigger: "Waiting user input for name",
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Ask for help",
    },
    {
      id: "Ask for help",
      message: "Hi {previousValue}, What can I help you?",
      trigger: "Waiting user input message",
    },
    {
      id: "Waiting user input message",
      user: true,
      trigger: (previousValue: Record<string, unknown>) => {
        return "Ask contact information";
      },
    },
    {
      id: "Ask contact information",
      message: "How can I contact you?",
      trigger: "Displaying options to help",
    },
    {
      id: "Displaying options to help",
      options: [
        {
          value: "phone",
          label: "Phone",
          trigger: "Show phone input"
        },
        {
          value: "email",
          label: "Email",
          trigger: "Show email input"
        },
      ],
    },
    {
      id: "Show phone input",
      message: "Please type your phone?",
      trigger: "Validate phone",
    },
    {
      id: "Validate phone",
      user: true,
      validator: (value: number) => {
        if (isNaN(value) || !value.toString().match(/^\d{12}$/)) {
          return 'For example: 380991478563'
        }

        return true;
      },
      trigger: "Finish",
    },
    {
      id: "Show email input",
      component: (
        <FormForChatbot />
      ),
      waitAction: true,
      trigger: "Finish",
    },
    {
      id: "Finish",
      message: "Good! Well done!!!",
      end: true,
    },
  ];

  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: 'linear-gradient(303deg, #45c3cf, #007d90)',
    headerFontColor: "#fff",
    headerFontSize: "18px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fafafa",
    userFontColor: "#00B2B2"
  };

  const handleEndChat = ({ values }: any[]): void => {
    const [name, subject, _, contactToConnect] = values;
    const toString = Object.prototype.toString;
    let phone = '';
    let city = '';
    let email = '';

    if (toString.call(contactToConnect) === '[object Object]') {
      city = contactToConnect.city;
      email = contactToConnect.email;
    } else {
      phone = contactToConnect;
    }


    emailjs.send("service_qp93pei", "template_50xktp7", {
      from_name: `${email ? email : "rsclonedefault@gmail.com"}`,
      to_name: "Admin",
      message: `Hello! I'm ${name}! 
        Please, contact me: ${phone ? phone : email} 
        My subject is: ${subject} city: ${city}`,
    }, 'user_Byn4mRCUn0EZbJWxvefwH')
      .catch((error) => {
        console.error(error.text);
      });
  };

  return (
    <ThemeProvider theme={theme} >
      <ChatBot
        headerTitle={<HeaderForChatbot />}
        inputStyle={{ 'fontSize': '14px' }}
        floating='true'
        userAvatar={userAvatar}
        botAvatar={'https://vjoy.cc/wp-content/uploads/2020/11/klassnye-kartinki-i-fotki-v-shapke-na-avu-avatarku-podborka-2.jpg'}
        recognitionEnable={true}
        speechSynthesis={{ enable: false, lang: 'en' }}
        steps={steps}
        handleEnd={handleEndChat}
      />
    </ThemeProvider>
  );
};

export default SimpleChatbot;
