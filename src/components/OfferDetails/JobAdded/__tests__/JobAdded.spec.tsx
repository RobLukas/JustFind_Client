import React from 'react';
import { cleanup, render } from '@testing-library/react';

import JobAddedProps from '../JobAdded.interface';
import JobAdded from '../JobAdded';
import { ThemeProvider } from 'styled-components';
import lightMode from '@styles/theme/lightMode';

describe('<JobAdded />', () => {
  afterEach(cleanup);
  it('render correctly with New annotation', () => {
    const props: JobAddedProps = { createdAt: new Date() };
    const { container, getByText } = render(
      <ThemeProvider theme={lightMode}>
        <JobAdded {...props}></JobAdded>
      </ThemeProvider>,
    );
    expect(getByText('New')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('render correctly with notify 5d ago', () => {
    const date = new Date();
    const dateFiveDaysAgo = date.setDate(date.getDate() - 5);

    const props: JobAddedProps = { createdAt: new Date(dateFiveDaysAgo) };
    const { container, getByText } = render(
      <ThemeProvider theme={lightMode}>
        <JobAdded {...props}></JobAdded>
      </ThemeProvider>,
    );
    expect(getByText('5d ago')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
