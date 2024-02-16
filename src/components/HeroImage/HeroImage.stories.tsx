// HeroImage/HeroImage.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import HeroImage, { HeroImageProps } from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/1200x400',
  title: 'Hero Title',
  subtitle: 'This is a hero subtitle',
  ctaText: 'Call to Action',
};
