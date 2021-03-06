import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import OfferDetails from './OfferDetails';
import OfferDetailsProps from './OfferDetails.interface';

export default {
  title: 'components/Offer/OfferDetails',
  component: OfferDetails,
} as Meta;

const Template: Story<OfferDetailsProps> = (args: OfferDetailsProps) => (
  <OfferDetails {...args} />
);

export const javascriptOffer = Template.bind({});
javascriptOffer.args = {
  mainlyTechnology: 'JS',
  logoSrc:
    'https://bucket.justjoin.it/offers/company_logos/thumb/b4a0837f135fe43ab93209dbd8e4ce660cbd39b0.jpg?1576668518',
  title: 'Programista Javascript',
  salary: {
    from: 1000,
    to: 10000,
    currency: 'PLN',
  },
  companyName: 'Sii',
  companyAddress: 'Grunwaldzka 20/3',
  technologies: ['react', 'es6', 'css'],
  createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
};

export const htmlOffer = Template.bind({});
htmlOffer.args = {
  mainlyTechnology: 'Html',
  logoSrc:
    'https://bucket.justjoin.it/offers/company_logos/thumb/b4a0837f135fe43ab93209dbd8e4ce660cbd39b0.jpg?1576668518',
  title: 'Programista Html',
  salary: {
    from: 4000,
    to: 12500,
    currency: 'PLN',
  },
  companyName: 'Goyello',
  companyAddress: 'Łódźka 2/13a',
  technologies: ['css', 'html5', 'web design'],
  createdAt: new Date(new Date().setDate(new Date().getDate() - 8)),
};
