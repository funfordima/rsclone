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
import Loader from 'react-loader-spinner';
import {
  doctors,
  clinics,
  comments,
  category,
  subcategory,
  articles,
  linkservice,
  linkslider
} from './api';
import {
  ArticleType,
  Category,
  ClinicType,
  DoctorType,
  Subcategory,
  Comment,
  LinkService,
  LinkSlider
} from './types';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import { ReviewsAllPage } from './components/CatalogPage/components/ReviewsAllPage';
import Slider from './components/Slider';
import styled from 'styled-components';

export const SignInContext = React.createContext(false);
export const ResetPasswordContext = React.createContext('');

const App: React.FC = () => {
  useEffect(() => {
    setData();
  }, []);

  const [isLoadedCategory, setIsloadedCategory] = useState(false);
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
  const [dataLinksSlider, setDataLinksSlider] = useState<LinkSlider[]>([]);
  const [dataLinksService, setDataLinksService] = useState<LinkService[]>([]);

  const setData = async () => {
    setDataCategory();
    setDataArticles();
    setDataDoctors();
    setDataClinics();
    setDataComments();
    setDataLinks();
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

  const setDataLinks = async () => {
    const linksSlider: Array<LinkSlider> = await linkslider;
    const linksService: Array<LinkService> = await linkservice;
    setDataLinksSlider(linksSlider);
    setDataLinksService(linksService);
  };

  const Wrapper = styled.main`
    min-height: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const idCatalogPageDefault = localStorage.getItem('pageId') || '';
  const currentNavigationItemId: string | null =
    localStorage.getItem('navigationItemId') || null;

  const [isSignedIn, setSignedIn] = useState(false);
  const [isResetPassword, setResetPassword] = useState('');
  const [idCatalogPage, setIdCatalogPage] = useState(idCatalogPageDefault);
  const [currentPageId, setCurrentPageId] = useState<string | null>(
    currentNavigationItemId,
  );

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
              {isLoadedCategory && isLoadedArticles ? (
                <main>
                  <Navigation
                    categoriesList={dataCategory}
                    setCurrentPageId={setCurrentPageId}
                  />
                  { dataLinksSlider.length ? <Slider data={ dataLinksSlider } /> : false }
                  { dataLinksService.length ? <MainServices
                    serviceName={'Популярное при Covid'}
                    serviceLinks={dataLinksService.map(link => link.src)}
                    serviceImagesLinks={dataLinksService.map(link => link.srcImg)}
                  /> : false }
                  <SimpleChatbot />
                </main>
              ) : (
                <Wrapper>
                  <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                  />
                </Wrapper>
              )}
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
              render={() =>
                isLoadedDoctors && isLoadedClinics ? (
                  <>
                    <CreateHeader />{' '}
                    <Clinics
                      clinics={dataClinics}
                      doctors={dataDoctors}
                      currentPageId={currentPageId}
                      filterList={dataSubcategory}
                    />
                  </>
                ) : (
                  <Wrapper>
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000}
                    />
                  </Wrapper>
                )
              }
            />
            <Route
              path={'/doctors'}
              render={() =>
                isLoadedDoctors ? (
                  <>
                    <CreateHeader />
                    <Doctors
                      doctors={dataDoctors}
                      currentPageId={currentPageId}
                      filterList={dataSubcategory}
                    />
                    <Footer />
                  </>
                ) : (
                  <Wrapper>
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000}
                    />
                  </Wrapper>
                )
              }
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
              render={() =>
                isLoadedCategory && isLoadedArticles ? (
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
                    <Footer />
                  </>
                ) : (
                  <Wrapper>
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000}
                    />
                  </Wrapper>
                )
              }
            />
            <Route
              path={`/journal/article`}
              render={() => (
                <div style={{ background: '#f2f2f2' }}>
                  <CreateHeader />
                  {isLoadedArticles && isLoadedComments && isLoadedCategory ? (
                    <main>
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
                      />
                    </main>
                  ) : (
                    <Wrapper>
                      <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000}
                      />
                    </Wrapper>
                  )}
                </div>
              )}
            />
            <Route
              exact
              path="/review"
              render={() =>
                isLoadedArticles && isLoadedComments && isLoadedCategory ? (
                  <ReviewsAllPage
                    dataCategory={dataCategory}
                    setCurrentPageId={setCurrentPageId}
                    reviews={dataComments}
                    dataArticlesAllId={dataArticlesAllId}
                  />
                ) : (
                  <Wrapper>
                    <Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000}
                    />
                  </Wrapper>
                )
              }
            />
          </Switch>
        </BrowserRouter>
      </ResetPasswordContext.Provider>
    </SignInContext.Provider>
  );
};
export default App;
