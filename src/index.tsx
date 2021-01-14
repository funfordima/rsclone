import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainServices from './components/mainServices/mainServices';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <MainServices 
      serviceName = {'Новый год 2021 в санаториях Беларуси'}
      serviceLinks = {['#', '#', '#', '#', '#', '#']}
      serviceImagesLinks = {['https://static.103.by/images/common/image_block_item/c65ecfb2dc6930e6c677b0a7d5b3edb7.jpg', 'https://static.103.by/images/common/image_block_item/b7501006e75202ad8cde9a0a7fe09947.jpg', 
        'https://static.103.by/images/common/image_block_item/66a692cdcc9379ad92f50334a9db81d9.jpg', 'https://static.103.by/images/common/image_block_item/0fd8ab5de08733756d655f695e0a1d17.jpg', 
        'https://static.103.by/images/common/image_block_item/d8d06f02b0ef97038bdd93db3869bb36.jpg', 'https://static.103.by/images/common/image_block_item/00bc4712a75fd469242c191469a80b5f.jpg']} 
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();