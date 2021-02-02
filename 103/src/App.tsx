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
import Loader from "react-loader-spinner";
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
import styled from 'styled-components';

export const SignInContext = React.createContext(false);
export const ResetPasswordContext = React.createContext('');

const App: React.FC = () => {
  useEffect(() => {
    setData();
  }, []);

  const [isLoadedCategory, setIsloadedCategory] = useState(false);
  const [isLoaded, setIsloaded] = useState(false);
  const [isLoadedDoctors, setIsLoadedDoctors] = useState(false);
  const [isLoadedClinics, setIsLoadedClinics] = useState(false);
  const [isLoadedArticles, setIsloadedArticles] = useState(false);
  const [isLoadedComments, setIsLoadedComments] = useState(false);
  const [dataDoctors, setDataDoctorsState] = useState<DoctorType[]>([]);
  const [dataClinics, setDataClinicsState] = useState<ClinicType[]>([]);
  const [dataComments, setDataCommentsState] = useState<Comment[]>([]);
  const [dataCategory, setDataCategoryState] = useState<Category[]>([]);
  const [dataSubcategory, setDataSubcategoryState] = useState<Subcategory[]>([]);
  const [dataArticles, setDataArticlesState] = useState<ArticleType[]>([]);

  const setData = async () => {
    setDataCategory();
    setDataArticles();
    setDataDoctors();
    setDataClinics();
    setDataComments();
    setIsloaded(true);
  };

  const setDataCategory = async () => {
    const dataCategory: Array<Category> = await category;
    const dataSubcategory: Array<Subcategory> = await subcategory;
    setDataCategoryState(dataCategory);
    setDataSubcategoryState(dataSubcategory);
    setIsloadedCategory(true);
  };

  const setDataArticles = async () => {
    const dataArticles: Array<ArticleType> = await articles;
    setDataArticlesState(dataArticles);
    setIsloadedArticles(true);
  };

  const setDataDoctors = async () => {
    const dataDoctors: Array<DoctorType> = await doctors;
    setDataDoctorsState(dataDoctors);
    setIsLoadedDoctors(true);
  };

  const setDataClinics = async () => {
    const dataClinics: Array<ClinicType> = await clinics;
    setDataClinicsState(dataClinics);
    setIsLoadedClinics(true);
  };

  const setDataComments = async () => {
    const dataComments: Array<Comment> = await comments;
    setDataCommentsState(dataComments);
    setIsLoadedComments(true);
  };

  const Wrapper = styled.main`
    min-height: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const idCatalogPageDefault = localStorage.getItem('pageId') || '';
  const currentNavigationItemId: string | null =
    localStorage.getItem('navigationItemId') || null;

  const [isSignedIn, setSignedIn] = useState(false);
  const [isResetPassword, setResetPassword] = useState('');
  const [idCatalogPage, setIdCatalogPage] = useState(idCatalogPageDefault);
  const [currentPageId, setCurrentPageId] = useState<string | null>(
    currentNavigationItemId,
  );

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

  const dataArticlesAllId = dataArticles.map(({ _id, subtitle }) => ({
    _id,
    subtitle,
  }));

  return (
    <SignInContext.Provider value={isSignedIn}>
      <ResetPasswordContext.Provider value={isResetPassword}>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'}>
              <CreateHeader />
              { isLoadedCategory && isLoadedArticles ? <main>
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
              </main> : <Wrapper><Loader
                          type="Puff"
                          color="#00BFFF"
                          height={100}
                          width={100}
                          timeout={3000}
                        />
                </Wrapper>
              }
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
            <Route
              path={'/clinics'}
              render={() => (
                isLoadedDoctors && isLoadedClinics ? <><CreateHeader /> <Clinics
                  clinics={dataClinics}
                  doctors={dataDoctors}
                  currentPageId={currentPageId}
                  filterList={dataSubcategory}
                /></> : <Wrapper><Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                  />
                </Wrapper>
              )}
            />
            <Route
              path={'/doctors'}
              render={() => isLoadedDoctors ? <><CreateHeader /><Doctors doctors={dataDoctors} /><Footer /></> : <Wrapper><Loader
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={3000}
                />
              </Wrapper>}
            />
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
                isLoadedCategory && isLoadedArticles ? <>
                  <CreateHeader />
                  <Navigation
                    categoriesList={dataCategory}
                    setCurrentPageId={setCurrentPageId}
                  />
                  <ArticlePage
                    articles={dataArticles}
                    getIdForCatalogPage={getIdForCatalogPage}
                  />
                  <Footer />
                </> : <Wrapper><Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                  />
                </Wrapper>
              )}
            />
            <Route
              path={`/journal/article`}
              render={() => (
                <div style={{ background: '#f2f2f2' }}>
                  <CreateHeader />
                  { isLoadedArticles && isLoadedComments && isLoadedCategory ? <main>
                    <Navigation
                      categoriesList={dataCategory}
                      setCurrentPageId={setCurrentPageId}
                    />
                    <CatalogPage
                      dataArticles={
                        dataArticles.find(
                          article => article._id === idCatalogPage,
                        )!
                      }
                      reviews={dataComments.filter(
                        reviewArticle =>
                          reviewArticle.idArticle === idCatalogPage,
                      )}
                      countReviews={dataComments.length}
                    /></main> : <Wrapper><Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000}
                    />
                  </Wrapper>}
                </div>
              )}
            />
            <Route
              exact
              path="/review"
              render={() => (
                isLoadedArticles && isLoadedComments && isLoadedCategory ? <ReviewsAllPage
                  dataCategory={dataCategory}
                  setCurrentPageId={setCurrentPageId}
                  reviews={dataComments}
                  dataArticlesAllId={dataArticlesAllId}
                /> :<Wrapper><Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                  />
                </Wrapper>
              )}
            />
          </Switch>
        </BrowserRouter>
      </ResetPasswordContext.Provider>
    </SignInContext.Provider>
  );
};
export default App;
