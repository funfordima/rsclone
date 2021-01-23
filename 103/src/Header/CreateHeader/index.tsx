import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './CreateHeader.scss';
import LogoLink from '../LogoLink';
import CitySearch from '../CitySearch';
import MainSearch from '../MainSearch';
import UserBar from '../UserBar';
// import { AuthorizationPage } from '../pages/AuthorizationPage';

const CreateHeader: React.FC = () => {
  return (
    <header className="header">
      <LogoLink />
      <CitySearch />
      <MainSearch />
      <UserBar />
    </header>
  );
};
// <BrowserRouter>
//   <Switch>
{/* <Route exact path={'/'} > */ }

{/* </Route> */ }
{/* <Route path={'/authorization'} component={AuthorizationPage} /> */ }
{/* </Switch> 
    </BrowserRouter> */}

export default CreateHeader;
