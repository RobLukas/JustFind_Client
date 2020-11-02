import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Header from './Header';

export default {
  title: 'components/Header',
  component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const header = Template.bind({});
