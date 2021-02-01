import React, { useEffect, useState } from 'react';
import './App.css';
import CreateHeader from './components/Header/CreateHeader';
import MainServices from './components/mainServices/mainServices';
import Clinics from './components/clinics/clinics';
import Doctors from './components/doctors/doctors';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthorizationPage } from './components/Header/pages/AuthorizationPage';
import { UserPage } from './components/Header/pages/UserPage';
import { ResetPage } from './components/Header/pages/ResetPage';
import Navigation from './components/Navigation';
import CatalogPage from './components/CatalogPage';
import SimpleChatbot from './components/SimpleChatbot';
import {
  doctors,
  clinics,
  comments,
  category,
  subcategory,
  articles,
} from './api';
import {
  ArticleType,
  Category,
  ClinicType,
  DoctorType,
  Subcategory,
  Comment,
} from './types';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import { ReviewsAllPage } from './components/CatalogPage/components/ReviewsAllPage';
import PersonalPage from './components/PersonalPage';
import Slider from './components/Slider';
// import styled from 'styled-components';

export const SignInContext = React.createContext(false);
export const ResetPasswordContext = React.createContext('');

const App: React.FC = () => {
  useEffect(() => {
    setData();
  }, []);

  const [isLoaded, setIsloaded] = useState(false);
  const [dataDoctors, setDataDoctorsState] = useState<DoctorType[]>([]);
  const [dataClinics, setDataClinicsState] = useState<ClinicType[]>([]);
  const [dataComments, setDataComments] = useState<Comment[]>([]);
  const [dataCategory, setDataCategory] = useState<Category[]>([]);
  const [dataSubcategory, setDataSubcategory] = useState<Subcategory[]>([]);
  const [dataArticles, setDataArticles] = useState<ArticleType[]>([]);

  const setData = async () => {
    const dataDoctors: Array<DoctorType> = await doctors;
    const dataClinics: Array<ClinicType> = await clinics;
    const dataComments: Array<Comment> = await comments;
    const dataCategory: Array<Category> = await category;
    const dataSubcategory: Array<Subcategory> = await subcategory;
    const dataArticles: Array<ArticleType> = await articles;

    setDataDoctorsState(dataDoctors);
    setDataClinicsState(dataClinics);
    setDataComments(dataComments);
    setDataCategory(dataCategory);
    setDataSubcategory(dataSubcategory);
    setDataArticles(dataArticles);
    setIsloaded(true);
  };

  // console.log(dataComments);

  const idCatalogPageDefault = localStorage.getItem('pageId') || '';

  const [isSignedIn, setSignedIn] = useState(false);
  const [isResetPassword, setResetPassword] = useState('');
  const [idCatalogPage, setIdCatalogPage] = useState(idCatalogPageDefault);
  const [currentPageId, setCurrentPageId] = useState<string | null>(null);

  // console.log(idCatalogPageDefault, idCatalogPage, dataArticles);

  const toggleEnterUser = (isSign: boolean): void => {
    setSignedIn(isSign);
  };

  const resetUserPassword = (isReset: string): void => {
    setResetPassword(isReset);
  };

  const getIdForCatalogPage = (value: string): void => {
    setIdCatalogPage(value);
    localStorage.setItem('pageId', value);
  };

  const dataArticlesAllId = dataArticles.map(({ _id, subtitle }) => ({ _id, subtitle }));

  return (
    <SignInContext.Provider value={isSignedIn}>
      <ResetPasswordContext.Provider value={isResetPassword}>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'}>
              <CreateHeader />
              {/* <Doctors doctors={dataDoctors} /> */}
              <Navigation
                categoriesList={dataCategory}
                setCurrentPageId={setCurrentPageId}
              />
              <Slider dataArticles={ dataArticles } />
              <MainServices
                serviceName={'Новый год 2021 в санаториях Беларуси'}
                serviceLinks={['#', '#', '#', '#', '#', '#']}
                serviceImagesLinks={[
                  'https://static.103.by/images/common/image_block_item/c65ecfb2dc6930e6c677b0a7d5b3edb7.jpg',
                  'https://static.103.by/images/common/image_block_item/b7501006e75202ad8cde9a0a7fe09947.jpg',
                  'https://static.103.by/images/common/image_block_item/66a692cdcc9379ad92f50334a9db81d9.jpg',
                  'https://static.103.by/images/common/image_block_item/0fd8ab5de08733756d655f695e0a1d17.jpg',
                  'https://static.103.by/images/common/image_block_item/d8d06f02b0ef97038bdd93db3869bb36.jpg',
                  'https://static.103.by/images/common/image_block_item/00bc4712a75fd469242c191469a80b5f.jpg',
                ]}
              />
              <SimpleChatbot />
              <Footer />
            </Route>
            <Route
              path={'/authorization'}
              render={() =>
                isSignedIn ? (
                  <Redirect to="/" />
                ) : (
                    <AuthorizationPage onToggleEnterUser={toggleEnterUser} />
                  )
              }
            />
            <Route path={'/profile'} component={UserPage} />
            <Route path={'/clinics'} render={() => <Clinics clinics={dataClinics} doctors={dataDoctors} />} />
            <Route path={'/doctors'} render={() => <Doctors doctors={dataDoctors} />} />
            <Route
              path="/reset"
              render={() =>
                isResetPassword ? (
                  <Redirect to="/authorization" />
                ) : (
                    <ResetPage onResetPassword={resetUserPassword} />
                  )
              }
            />
            <Route
              exact
              path="/journal"
              render={() => (
                <>
                  <CreateHeader />
                  <Navigation
                    categoriesList={dataCategory}
                    setCurrentPageId={setCurrentPageId}
                  />
                  <ArticlePage
                    articles={dataArticles}
                    getIdForCatalogPage={getIdForCatalogPage}
                  />
                </>
              )}
            />
            <Route
              path={`/journal/article`}
              render={() => (
                <div style={{ background: '#f2f2f2' }}>
                  <CreateHeader />
                  <Navigation
                    categoriesList={dataCategory}
                    setCurrentPageId={setCurrentPageId}
                  />
                  <CatalogPage
                    dataArticles={dataArticles.find((article) => article._id === idCatalogPage)!}
                    reviews={dataComments.filter((reviewArticle) => reviewArticle.idArticle === idCatalogPage)}
                    countReviews={dataComments.length}
                  />
                </div>
              )}
            />
            <Route
              exact
              path="/review"
              render={() => <ReviewsAllPage
                dataCategory={dataCategory}
                setCurrentPageId={setCurrentPageId}
                reviews={dataComments}
                dataArticlesAllId={dataArticlesAllId}
              />
              }
            />
          </Switch>
        </BrowserRouter>
      </ResetPasswordContext.Provider>
    </SignInContext.Provider>
  );
};
export default App;
