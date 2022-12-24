import { FC } from "react";

interface CheckboxProps {
  id: string | number;
  name: string;
  label: string;
  onChange?: (e: HTMLInputElement) => void;
}

const Checkbox: FC<CheckboxProps> = ({ label, onChange, name, id }) => {
  return (
    <div>
      <input type="checkbox" />
      <label className="text-sm ml-2">{label}</label>
    </div>
  );
};

export default Checkbox;
