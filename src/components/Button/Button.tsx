// Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  backgroundColor: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, backgroundColor, disabled = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, cursor: disabled ? 'not-allowed' : 'pointer' }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
