// HeroImage/HeroImage.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage', () => {
  test('renders HeroImage component with title', () => {
    render(
      <HeroImage 
        imageUrl="https://via.placeholder.com/1200x400" 
        title="Test Hero" 
        subtitle="Test subtitle" 
        ctaText="Click me" 
      />
    );
    expect(screen.getByText('Test Hero')).toBeInTheDocument();
    expect(screen.getByText('Test subtitle')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
