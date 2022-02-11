import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'tailwindcss/tailwind.css';
import App from './App';
import { HelmetProvider, Helmet } from 'react-helmet-async';
// import './App.css';

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <Helmet>
        <title>猫のご飯残量計算</title>
        <link
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>😺</text></svg>"
          rel="icon"
        />
        <link
          href="https://twemoji.maxcdn.com/v/13.0.2/72x72/1f63a.png"
          rel="icon alternate"
          type="image/png"
        />
      </Helmet>
      <App />
    </React.StrictMode>
  </HelmetProvider>,
  document.getElementById('root')
);
