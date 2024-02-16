// Card/Card.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  imageUrl: 'https://via.placeholder.com/150',
  description: 'This is a card description.',
};
