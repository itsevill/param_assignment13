// Dropdown/Dropdown.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown'; // Ensure DropdownProps is correctly exported

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  placeholder: 'Select an option',
  onSelect: (value: any) => console.log(value), // Explicitly typing the 'value' parameter as 'any'
};
