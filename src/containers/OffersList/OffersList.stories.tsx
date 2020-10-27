import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import OffersList from './OffersList';
import OffersListProps from './OffersList.interface';
import ThemeWrapper from '@containers/ThemeWrapper/ThemeWrapper';
import offers from '@api/offers';

export default {
  title: 'container/OffersList',
  component: OffersList,
} as Meta;

const Template: Story<OffersListProps> = (args: OffersListProps) => (
  <ThemeWrapper>
    <OffersList {...args} />
  </ThemeWrapper>
);

export const Default = Template.bind({});
Default.args = {
  offers,
};
