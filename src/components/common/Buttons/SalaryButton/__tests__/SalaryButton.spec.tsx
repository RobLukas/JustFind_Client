import React from 'react';
import 'jest-styled-components';
import { cleanup, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import lightMode from 'styles/theme/lightMode';
import SalaryButton from '../SalaryButton';

describe('<SalaryButton />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const handleClick = jest.fn();

    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <SalaryButton handleClick={handleClick} />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
