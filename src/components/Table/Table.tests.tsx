// Table/Table.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
  test('renders Table component', () => {
    render(<Table><tr><td>Test</td></tr></Table>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
