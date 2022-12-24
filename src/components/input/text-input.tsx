import { FC, FormEvent } from "react";
import styles from "./text-input.module.css";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

// Interface for TextInput Components Props
interface TextInputProps {
  id: string;
  icon?: JSX.Element;
  name: string;
  placeholder?: string;
  label?: string;
  type: string;
  value?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

const TextInput: FC<TextInputProps> = ({
  id,
  name,
  icon,
  placeholder,
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <div className={styles["input-group"]}>
      {/* Label Input */}
      {label && (
        <label htmlFor={id} className={styles["input-label"]}>
          {label}
        </label>
      )}
      {/* Input Wrapper */}
      <div className={styles["input-wrapper"]}>
        {icon && <div className={styles["input-icon"]}>{icon}</div>}
        {/* Actual Input HTML elements */}
        <input
          id={id}
          name={name}
          type={type}
          value={value ? value : ""}
          onChange={onChange}
          className={
            `${styles["input-element"]}` +
            " " +
            `${icon ? "pl-10 py-1" : "pl-1 py-1"}`
          }
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
