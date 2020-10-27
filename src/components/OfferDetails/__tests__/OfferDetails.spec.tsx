import lightMode from '@styles/theme/lightMode';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import OfferDetails from '../OfferDetails';
import OfferDetailsProps from '../OfferDetails.interface';

describe('<OfferDetails />', () => {
  afterEach(cleanup);
  it('render correctly', () => {
    const props: OfferDetailsProps = {
      mainlyTechnology: 'JS',
      logoSrc: 'logoSrc',
      title: 'Job Title',
      salary: {
        from: 1000,
        to: 2000,
        currency: 'PLN',
      },
      companyName: 'company',
      companyAddress: 'address',
      technologies: ['html', 'css', 'js'],
      createdAt: new Date(),
    };

    const { container } = render(
      <ThemeProvider theme={lightMode}>
        <OfferDetails {...props} />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
