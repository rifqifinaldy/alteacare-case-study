import { FC } from "react";
import styles from "./filter.module.css";
import TextInput from "@/components/input/text-input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

// Filter Section Component
const FilterSection: FC = () => {
  return (
    <section className={styles["filter-section-container"]}>
      {/* Filter Logo */}
      <h1 className={styles["filter-section-logo"]}>Doctor Finder</h1>
      <hr className="mb-2" />
      {/* Filter Input Items */}
      <form className={styles["filter-section-items"]}>
        {/* Search Filter */}
        <TextInput
          icon={<MagnifyingGlassIcon />}
          placeholder="Search..."
          id="search"
          name="search"
          type="text"
        />
        {/* Dropdown Filter */}
        <h6>Input 2</h6>
        <h6>Input 3</h6>
      </form>
    </section>
  );
};

export default FilterSection;
