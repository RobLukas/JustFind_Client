import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Map from './Map';
import offers from 'api/offers';
import ThemeWrapper from 'containers/ThemeWrapper/ThemeWrapper';

export default {
  title: 'containers/Map',
  component: Map,
} as Meta;

const Template: Story = () => (
  <ThemeWrapper>
    <Map />
  </ThemeWrapper>
);

export const Default = Template.bind({});
Default.args = {
  offers,
};
