import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle  from './components/GlobalStyle/styled';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

