import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import NoJobOfferNotify from '../NoJobOfferNotify';
import lightMode from '@styles/theme/lightMode';

describe('<NoJobOfferNotify />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <NoJobOfferNotify />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
