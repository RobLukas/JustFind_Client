import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import OffersList from './OffersList';
import OffersListProps from './OffersList.interface';
import offers from 'api/offers';

export default {
  title: 'containers/OffersList',
  component: OffersList,
} as Meta;

const Template: Story<OffersListProps> = (args: OffersListProps) => (
  <OffersList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  offers,
};
