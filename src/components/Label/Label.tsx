// components/Label/Label.tsx
import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;