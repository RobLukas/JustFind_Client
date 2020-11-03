import React from 'react';
import 'jest-styled-components';
import { cleanup, render } from '@testing-library/react';

import lightMode from 'styles/theme/lightMode';
import { ThemeProvider } from 'styled-components';
import DropDownSalary from '../DropDownSalary';

describe('<DropDownSalary />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <DropDownSalary />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
