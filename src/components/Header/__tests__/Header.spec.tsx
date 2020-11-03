import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import lightMode from 'styles/theme/lightMode';
import Header from '../Header';
import { darkLogo } from 'assets';

describe('<Header />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const logo = darkLogo;
    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <Header logo={logo} />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
