import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import ThemeWrapper from 'containers/ThemeWrapper/ThemeWrapper';
import Offers from 'containers/Pages/Offers/Offers';
import store from 'redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <Offers />
      </ThemeWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
