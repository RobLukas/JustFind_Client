import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Offers from './Offers';

export default {
  title: 'pages/Offers',
  component: Offers,
} as Meta;

const Template: Story = () => <Offers />;

export const Default = Template.bind({});
