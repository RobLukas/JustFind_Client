import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import darkMode from '../src/styles/theme/darkMode.ts';
import lightMode from '../src/styles/theme/lightMode.ts';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
};

const themes = [darkMode, lightMode];

addDecorator(withThemesProvider(themes));
