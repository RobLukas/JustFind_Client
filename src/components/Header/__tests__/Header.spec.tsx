import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import lightMode from '@styles/theme/lightMode';
import Header from '../Header';

describe('<Header />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <Header />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
