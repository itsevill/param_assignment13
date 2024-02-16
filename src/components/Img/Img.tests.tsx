// Img/Img.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img', () => {
  test('renders an image with the correct src and alt text', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder" />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
    expect(image).toHaveAttribute('alt', 'Placeholder');
  });
});

