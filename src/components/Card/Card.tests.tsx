// Card/Card.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders Card component with title and description', () => {
    render(
      <Card 
        title="Test Card" 
        imageUrl="https://via.placeholder.com/150" 
        description="This is a test description." 
      />
    );
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('This is a test description.')).toBeInTheDocument();
  });
});
