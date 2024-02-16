// RadioButton/RadioButton.types.ts
export interface RadioButtonProps {
    name: string;
    options: { label: string; value: string }[];
    selectedValue: string;
    onChange: (value: string) => void;
  }
  