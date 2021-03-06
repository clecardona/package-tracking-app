import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import common_en from "./translations/en.json";
import common_fr from "./translations/fr.json";
import common_sv from "./translations/sv.json";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is the custom namespace
      },
      fr: {
          common: common_fr
      },

      sv: {
        common: common_sv
    }


    }

});


ReactDOM.render(

  <React.StrictMode>
<I18nextProvider i18n={i18next}>
    <App />
</I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

