import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'tailwindcss/tailwind.css';
import App from './App';
import { HelmetProvider, Helmet } from 'react-helmet-async';
// import './App.css';

// import imgUrl from './ogp.png';

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <Helmet>
        <title>猫のご飯残量計算</title>
      </Helmet>
      <App />
    </React.StrictMode>
  </HelmetProvider>,
  document.getElementById('root')
);
