// components/Text/Text.tests.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Text>This is a text component</Text>);
    expect(getByText('This is a text component')).toBeInTheDocument();
  });

  it('applies the correct font size', () => {
    const { getByText } = render(<Text size="sm">This is a text component</Text>);
    expect(getByText('This is a text component')).toHaveStyle(`font-size: 12px`);

    const { getByText: getByText2 } = render(<Text size="md">This is a text component</Text>);
    expect(getByText2('This is a text component')).toHaveStyle(`font-size: 14px`);

    const { getByText: getByText3 } = render(<Text size="lg">This is a text component</Text>);
    expect(getByText3('This is a text component')).toHaveStyle(`font-size: 16px`);
  });
});