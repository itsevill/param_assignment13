// Dropdown/Dropdown.tests.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  test('toggles dropdown on click', () => {
    render(
      <Dropdown
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' }
        ]}
        onSelect={() => {}}
      />
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Option 1'));
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument(); // Assuming the dropdown closes upon selection
  });
});
