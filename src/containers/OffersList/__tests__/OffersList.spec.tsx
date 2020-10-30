import React from 'react';
import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import OffersList from '../OffersList';
import offers from 'api/offers';

describe('<OffersList />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const props = { offers };
    const { container } = render(<OffersList {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
