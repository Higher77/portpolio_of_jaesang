import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import Reset from './styles/Reset';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Reset />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
