import React, { useState } from 'react';
import './App.css';
import CreateHeader from './components/Header/CreateHeader';
import MainServices from './components/mainServices/mainServices';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthorizationPage } from './components/Header/pages/AuthorizationPage';
import { UserPage } from './components/Header/pages/UserPage';
import { ResetPage } from './components/Header/pages/ResetPage';
import CatalogPage from './components/CatalogPage';
import SimpleChatbot from './components/SimpleChatbot';

export const SignInContext = React.createContext(false);
export const ResetPasswordContext = React.createContext(false);

const App: React.FC = () => {
  const [isSignedIn, setSignedIn] = useState(false);
  const [isResetPassword, setResetPassword] = useState('');

  const toggleEnterUser = (isSign: boolean): void => {
    console.log('test sign app');
    setSignedIn(isSign);
    console.log(isSign);
  }

  const resetUserPassword = (isReset: string): void => {
    console.log('reset app');
    setResetPassword(isReset);
    console.log(isResetPassword);
  };

  const user = {
    title: 'Как бороться с паническими атаками? Советы невролога',
    authorName: 'Тылец Александра, 21 января',
    text: 'Часто пациенты с приступами паники вынуждены обращаться к профильным врачам, чтобы избавиться от сопутствующих последствий этих состояний. У некоторых на пике паники подскакивает давление, возникают боли в сердце и учащенное сердцебиение. А кому-то во время приступа не хватает воздуха, так что появляется ощущение удушья. Врач-невролог Анатолий Нимчук дал несколько советов, как действовать во время панической атаки.',
    imgSrc: 'https://static.103.ua/images/common/wysiwyg/2021/01/a368beef7705709f558a9613be3c0447.jpg',
    complete: true,
    articleDate: new Date().toLocaleTimeString(),
    countViewPost: 72,
    imgTitle: 'Как бороться с паническими атаками? Советы невролога',
    headerArticle: 'Как бороться с паническими атаками? Советы невролога',
  }

  return (
    <SignInContext.Provider value={isSignedIn}>
      <ResetPasswordContext.Provider value={isResetPassword}>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} >
              <CreateHeader />
              <MainServices
                serviceName={'Новый год 2021 в санаториях Беларуси'}
                serviceLinks={['#', '#', '#', '#', '#', '#']}
                serviceImagesLinks={['https://static.103.by/images/common/image_block_item/c65ecfb2dc6930e6c677b0a7d5b3edb7.jpg', 'https://static.103.by/images/common/image_block_item/b7501006e75202ad8cde9a0a7fe09947.jpg',
                  'https://static.103.by/images/common/image_block_item/66a692cdcc9379ad92f50334a9db81d9.jpg', 'https://static.103.by/images/common/image_block_item/0fd8ab5de08733756d655f695e0a1d17.jpg',
                  'https://static.103.by/images/common/image_block_item/d8d06f02b0ef97038bdd93db3869bb36.jpg', 'https://static.103.by/images/common/image_block_item/00bc4712a75fd469242c191469a80b5f.jpg']}
              />
              <CatalogPage {...user} />
              <SimpleChatbot />
            </Route>
            <Route path={'/authorization'} render={() => isSignedIn ? <Redirect to="/" /> : <AuthorizationPage onToggleEnterUser={toggleEnterUser} />} />
            <Route path={'/profile'} component={UserPage} />
            <Route path="/reset" render={() => isResetPassword ? <Redirect to="/authorization" /> : <ResetPage onResetPassword={resetUserPassword} />} />
          </Switch>
        </BrowserRouter>
      </ResetPasswordContext.Provider>
    </SignInContext.Provider>
  );
}
export default App;
