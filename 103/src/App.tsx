import React, { useState } from 'react';
import './App.css';
import CreateHeader from './Header/CreateHeader';
import MainServices from './components/mainServices/mainServices';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthorizationPage } from './Header/pages/AuthorizationPage';
import { UserPage } from './Header/pages/UserPage';

export const SignInContext = React.createContext();

const App: React.FC = () => {
  const [isSignedIn, setSignedIn] = useState(false);

  const toggleEnterUser = (isSign: boolean): void => {
    console.log('test sign app');
    setSignedIn(isSign);
    console.log(isSign);
  }

  return (
    <SignInContext.Provider value={isSignedIn}>
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
          </Route>
          {/* {isSignedIn
              ? <div>SignIn</div>
              : <Route path={'/authorization'} render={() => <AuthorizationPage onToggleEnterUser={toggleEnterUser} />} />
            } */}
          <Route path={'/authorization'} render={() => isSignedIn ? <Redirect to="/" /> : <AuthorizationPage onToggleEnterUser={toggleEnterUser} />} />
          <Route path={'/profile'} component={UserPage} />
        </Switch>
      </BrowserRouter>
    </SignInContext.Provider>
  );
}
export default App;
