import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';
// import Button { ButtonProps } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

// Define Template type
// const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Define story for Primary button
export const Primary = {
  args: {
    text: 'Click me',
    backgroundColor: 'blue',
    disabled: false,
    onClick: () => console.log('Button clicked'),
  }
};

// Define story for Disabled button
export const Disabled = {
  args: {
    text: 'Disabled Button',
    backgroundColor: 'gray',
    disabled: true,
    onClick: () => console.log('Button clicked'),
  }
};
