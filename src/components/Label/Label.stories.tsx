/// Import the necessary libraries
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label from './Label';

// Define the default export for the storybook configuration
export default {
  title: 'Label',
  component: Label,
} as Meta;

// Define the Primary story
export const Primary: Story = (args) => <Label {...args}>Username</Label>;
Primary.args = {
  children: 'Username',
  htmlFor: 'username',
};
