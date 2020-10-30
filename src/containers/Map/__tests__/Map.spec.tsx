import React from 'react';
import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import Map from '../Map';

describe('<Map />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const { container } = render(<Map />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
