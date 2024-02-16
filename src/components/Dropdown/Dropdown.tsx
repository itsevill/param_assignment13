// Dropdown/Dropdown.tsx
import React, { useState } from 'react';


export interface DropdownProps {
  options: { label: string; value: any }[];
  placeholder?: string;
  onSelect: (value: any) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{ label: string; value: any } | null>(null);

  const handleSelect = (option: { label: string; value: any }) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : placeholder}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value.toString()} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
