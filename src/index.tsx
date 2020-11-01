import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ThemeWrapper from 'containers/ThemeWrapper/ThemeWrapper';
import Offers from 'containers/Pages/Offers/Offers';

ReactDOM.render(
  <React.StrictMode>
    <ThemeWrapper>
      <Offers />
    </ThemeWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
