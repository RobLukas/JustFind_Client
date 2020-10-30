import React from 'react';
import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';

import PopupBox from '../PopupBox';
import Offers from 'api/offers.interface';

describe('<PopupBox />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const props: Offers = {
      mainlyTechnology: 'JS',
      logoSrc: 'logosrc',
      title: 'title',
      salary: {
        from: 1000,
        to: 2000,
        currency: 'PLN',
      },
      companyName: 'company name',
      companyAddress: 'company address',
      technologies: ['html', 'react', 'css'],
      geoPosition: [1000, 1000],
      createdAt: new Date(),
    };
    const { container } = render(<PopupBox {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
