import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Auth0Provider
    domain='dev-jywj71v9.us.auth0.com'
    clientId='2loj9vlvvb41j1XwtynJMmqV1dvwidVS'
     redirectUri={window.location.origin}
    >

    <App />
  </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();



