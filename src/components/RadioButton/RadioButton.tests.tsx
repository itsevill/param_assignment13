// RadioButton/RadioButton.tests.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  test('selects the correct option', () => {
    const handleChange = jest.fn();
    render(
      <RadioButton
        name="test-radio"
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' }
        ]}
        selectedValue="1"
        onChange={handleChange}
      />
    );
    
    const option2 = screen.getByLabelText('Option 2');
    fireEvent.click(option2);
    expect(handleChange).toHaveBeenCalledWith('2');
  });
});
