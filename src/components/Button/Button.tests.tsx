// Button.tests.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  const { getByText } = render(
    <Button text="Test Button" backgroundColor="blue" disabled={false} onClick={() => {}} />
  );
  const buttonElement = getByText(/Test Button/i);
  expect(buttonElement).toBeInTheDocument();
});

test('Background color changes when button is disabled', () => {
  const { getByText } = render(
    <Button text="Test Button" backgroundColor="blue" disabled={true} onClick={() => {}} />
  );
  const buttonElement = getByText(/Test Button/i);
  expect(buttonElement).toHaveStyle('background-color: gray');
});
