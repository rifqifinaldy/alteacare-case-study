import { FC } from "react";
import styles from "./doctor.module.css";
import { IDoctors } from "types/doctor.type";
import Card from "@/components/card/Card";

// Doctor Section Props Type
interface IDoctorSectionProps {
  doctors: IDoctors[];
  searchValue: string;
}

// Doctor Section Component
const DoctorSection: FC<IDoctorSectionProps> = ({ doctors, searchValue }) => {
  // Handler if there's no records found
  if (doctors.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500 font-bold text-4xl">
        No Records Found
      </div>
    );
  }

  // Render UI's / Components
  return (
    <section className={styles["doctor-list-wrapper"]}>
      {/* Render & Dom Doctor's Data to The Card Components */}
      {doctors
        .filter((doctor) =>
          doctor.name.toLowerCase().includes(searchValue ? searchValue : "")
        )
        .map((doctor) => {
          return (
            <Card
              key={doctor.doctor_id}
              image={doctor.photo.formats.thumbnail}
              name={doctor.name}
              hospital={doctor.hospital[0].name}
              specialization={doctor.specialization.name}
              about={doctor.about_preview}
              price={doctor.price.formatted}
            />
          );
        })}
    </section>
  );
};

export default DoctorSection;
