import { FC } from "react";
import styles from "./filter.module.css";

// Filter Section Component
const FilterSection: FC = () => {
  return (
    <section className={styles["filter-section-container"]}>
      {/* Filter Logo */}
      <h1 className={styles["filter-section-logo"]}>Doctor Finder</h1>
      <hr className="mb-2" />
      {/* Filter Input Items */}
      <div className={styles["filter-section-items"]}>
        <h6>Input 1</h6>
        <h6>Input 2</h6>
        <h6>Input 3</h6>
      </div>
    </section>
  );
};

export default FilterSection;
