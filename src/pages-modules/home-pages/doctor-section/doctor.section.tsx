import { FC } from "react";
import styles from "./doctor.module.css";
import Card from "@/components/card/card";
import { IDoctors } from "types/doctor.type";

// Doctor Section Props Type
interface IDoctorSectionProps {
  doctors: IDoctors[];
}

// Doctor Section Component
const DoctorSection: FC<IDoctorSectionProps> = ({ doctors }) => {
  // Render UI's / Components
  return (
    <section className={styles["doctor-list-wrapper"]}>
      {/* Render & Dom Doctor's Data to The Card Components */}
      {doctors.map((doctor) => {
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
