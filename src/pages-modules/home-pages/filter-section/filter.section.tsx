import { FC } from "react";
import styles from "./filter.module.css";
import TextInput from "@/components/input/text-input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Dropdown from "@/components/dropdown/dropdown";
import { IDoctors } from "types/doctor.type";
import Checkbox from "@/components/checkboxes/checkbox";
import { IHospital } from "types/hospital.type";
import { ISpecialization } from "types/specialization.type";

interface FilterSectionProps {
  hospitals: IHospital[];
  specialization: ISpecialization[];
  handleFilter: (e: HTMLInputElement) => void;
}

// Filter Section Component
const FilterSection: FC<FilterSectionProps> = ({
  specialization,
  hospitals,
  handleFilter,
}) => {
  // UI's & Components
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
        {/* Dropdown Filter for Hospital */}
        <Dropdown id="hospital" label="Pilih Rumah Sakit">
          <ul className="items">
            {hospitals &&
              hospitals.map((hospital, i) => {
                return (
                  <li key={hospital.id} className="flex items-center mt-1">
                    <Checkbox
                      id={i}
                      name={hospital.name}
                      label={hospital.name}
                      onChange={handleFilter}
                    />
                  </li>
                );
              })}
          </ul>
        </Dropdown>
        <Dropdown id="specialization" label="Spesialisasi">
          <ul className="items">
            {specialization &&
              specialization.map((specialization, i) => {
                return (
                  <li
                    key={specialization.id}
                    className="flex items-center mt-1"
                  >
                    <Checkbox
                      id={i}
                      name={specialization.name}
                      label={specialization.name}
                      onChange={handleFilter}
                    />
                  </li>
                );
              })}
          </ul>
        </Dropdown>
      </form>
    </section>
  );
};

export default FilterSection;
