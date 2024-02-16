// components/Text/Text.tsx
import React from 'react';
import styled from 'styled-components';

interface TextProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const StyledText = styled.p<TextProps>`
  margin: 0;
  font-size: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '12px';
      case 'md':
        return '14px';
      case 'lg':
        return '16px';
      default:
        return '14px';
    }
  }};
`;

const Text: React.FC<TextProps> = ({ children, size }) => {
  return <StyledText size={size}>{children}</StyledText>;
};

export default Text;