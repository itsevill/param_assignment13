// components/Text/Text.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react'; // Updated import
import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Primary: Story<TextProps> = Template.bind({}); // Updated export syntax
Primary.args = {
  children: 'This is a text component',
  size: 'md',
};
