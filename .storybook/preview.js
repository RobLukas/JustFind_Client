import React from 'react';
import { addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import store from '../src/redux/store';
import ThemeWrapper from '../src/containers/ThemeWrapper/ThemeWrapper';

import darkMode from '../src/styles/theme/darkMode.ts';
import lightMode from '../src/styles/theme/lightMode.ts';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
};

const withProvider = (story) => (
  <Provider store={store}>
    <ThemeWrapper>{story()}</ThemeWrapper>
  </Provider>
);

const themes = [darkMode, lightMode];

addDecorator(withThemesProvider(themes));
addDecorator(withProvider);
