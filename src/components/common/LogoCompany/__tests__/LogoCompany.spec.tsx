import React from 'react';
import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import LogoCompany from '../LogoCompany';

describe('<LogoCompany />', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const urlSrc = 'urlSrc';
    const { container } = render(<LogoCompany logoSrc={urlSrc} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
