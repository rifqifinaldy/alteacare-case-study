import { FC, FormEvent } from "react";

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  onChange,
  name,
  id,
  value,
  checked,
  disabled,
}) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        type="checkbox"
      />
      <label className="text-sm ml-2">{label}</label>
    </div>
  );
};

export default Checkbox;
