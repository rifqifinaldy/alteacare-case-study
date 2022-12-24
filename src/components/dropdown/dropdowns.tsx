import { FC, useState } from "react";
import styles from "./dropdowns.module.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface DropdownProps {
  id: string;
  label: string;
  children?: JSX.Element[] | JSX.Element;
}

const Dropdown: FC<DropdownProps> = ({ id, label, children }) => {
  // Local State Component for functionality
  const [open, setOpen] = useState<boolean>(false);

  // Handle Dropdown Open/Close
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles["dropdown"]}>
      {/* Dropdown Button */}
      <div
        id={id}
        onClick={() => handleOpen()}
        className={
          styles["dropdown-button"] +
          " " +
          `${open ? styles["active"] : styles["inactive"]}`
        }
        tabIndex={100}
      >
        <span className={styles["dropdown-label"]}>{label}</span>
        <ChevronDownIcon className={styles["dropdown-icon"]} />
      </div>
      {/* Dropdown Items */}
      <div className={open ? styles["dropdown-menu"] : "hidden"}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
