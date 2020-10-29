import React from 'react';
import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import JobTitle from '../JobTitle';
import JobTitleProps from '../JobTitle.interface';
import { ThemeProvider } from 'styled-components';
import lightMode from 'styles/theme/lightMode';

describe('<JobTitle />', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const { children }: JobTitleProps = { children: 'job title' };
    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <JobTitle>{children}</JobTitle>
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
