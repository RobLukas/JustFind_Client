import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Header from './Header';
import ThemeWrapper from '@containers/ThemeWrapper/ThemeWrapper';

export default {
  title: 'components/Header',
  component: Header,
} as Meta;

const Template: Story = () => (
  <ThemeWrapper>
    <Header />
  </ThemeWrapper>
);

export const header = Template.bind({});
