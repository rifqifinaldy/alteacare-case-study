import { FC } from "react";
import styles from "./doctor.module.css";
import Card from "@/components/card/card";
import { IDoctors } from "types/doctor.type";

// Doctor Section Props
interface IDoctorSectionProps {
  doctors: IDoctors[];
}

// Doctor Section Component
const DoctorSection: FC<IDoctorSectionProps> = ({ doctors }) => {

  // UI's / Components
  return (
    <section className={styles["doctor-list-wrapper"]}>
      {/* Render & Dom Doctor's Data to The Card Components */}
      {doctors.map((doctor) => {
        return <Card key={doctor.doctor_id} />;
      })}
    </section>
  );
};

export default DoctorSection;
