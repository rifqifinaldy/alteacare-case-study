import { FC } from "react";
import styles from "./doctor.module.css";
import Card from "@/components/card/card";

// Doctor Section Component
const DoctorSection: FC = () => {
  return (
    <section className={styles["doctor-list-wrapper"]}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default DoctorSection;
