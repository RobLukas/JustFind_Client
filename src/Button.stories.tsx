import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import props from './interface';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Click it',
};
