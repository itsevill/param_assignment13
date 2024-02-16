// components/Label/Label.tests.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('Label', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Label>Username</Label>);
    expect(getByText('Username')).toBeInTheDocument();
  });
});