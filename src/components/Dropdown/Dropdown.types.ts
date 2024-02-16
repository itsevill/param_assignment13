// Dropdown/Dropdown.types.ts
export interface DropdownProps {
    options: { label: string; value: any }[];
    placeholder?: string;
    onSelect: (value: any) => void;
  }
  