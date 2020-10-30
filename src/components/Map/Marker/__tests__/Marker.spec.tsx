import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import offers from 'api/offers';
import React from 'react';
import MarkerMap from '../Marker';

describe('<MarkerMap />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const props = offers[0];
    const { container } = render(<MarkerMap {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
