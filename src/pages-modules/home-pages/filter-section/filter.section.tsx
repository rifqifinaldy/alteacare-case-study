import { FC, FormEvent } from "react";
import styles from "./filter.module.css";
import TextInput from "@/components/input/text-input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Checkbox from "@/components/checkboxes/checkbox";
import { IHospital } from "types/hospital.type";
import { ISpecialization } from "types/specialization.type";
import Dropdown from "@/components/dropdown/dropdowns";

interface FilterSectionProps {
  filterValue: {
    search: string;
    hospitals: string[];
    specializations: string[];
  };
  hospitals: IHospital[];
  specializations: ISpecialization[];
  onFilterByHospital: (e: FormEvent<HTMLInputElement>) => void;
  onFilterBySpecialization: (e: FormEvent<HTMLInputElement>) => void;
  onSearch: (e: FormEvent<HTMLInputElement>) => void;
}

// Filter Section Component
const FilterSection: FC<FilterSectionProps> = ({
  specializations,
  filterValue,
  hospitals,
  onFilterByHospital,
  onFilterBySpecialization,
  onSearch,
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
          value={filterValue.search}
          onChange={(e) => onSearch(e)}
        />

        {/* Dropdown Filter for Hospital */}
        <Dropdown id="hospital" label="Pilih Rumah Sakit">
          <ul className="items">
            {hospitals &&
              hospitals.map((hospital) => {
                return (
                  <li key={hospital.id} className="flex items-center mt-1">
                    <Checkbox
                      id={hospital.id}
                      value={hospital.name}
                      checked={filterValue.hospitals.includes(hospital.name)}
                      name={hospital.name}
                      label={hospital.name}
                      onChange={(e) => onFilterByHospital(e)}
                    />
                  </li>
                );
              })}
          </ul>
        </Dropdown>

        {/* Dropdown Filter For Specialization */}
        <Dropdown id="specialization" label="Spesialisasi">
          <ul className="items">
            {specializations &&
              specializations.map((specialization) => {
                return (
                  <li
                    key={specialization.id}
                    className="flex items-center mt-1"
                  >
                    <Checkbox
                      id={specialization.id}
                      value={specialization.name}
                      checked={filterValue.specializations.includes(
                        specialization.name
                      )}
                      name={specialization.name}
                      label={specialization.name}
                      onChange={(e) => onFilterBySpecialization(e)}
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
