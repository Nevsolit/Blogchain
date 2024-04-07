import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import i18next from 'i18next';

import { Loading } from '~/components/index.ts';

import App from './App.tsx';
import store, { persistor } from './redux/store/store.ts';

import global_en from '~/translations/en/global.json';
import global_vi from '~/translations/vi/global.json';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'vi',
  resources: {
    en: {
      global: global_en,
    },
    vi: {
      global: global_vi,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
