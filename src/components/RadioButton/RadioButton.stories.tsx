// RadioButton/RadioButton.stories.tsx
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => {
  const [value, setValue] = useState(args.selectedValue);
  return <RadioButton {...args} selectedValue={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'example',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  selectedValue: '1',
};
