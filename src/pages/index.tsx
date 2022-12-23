import DoctorSection from "src/pages-modules/home-pages/doctor-section/doctor.section";
import FilterSection from "src/pages-modules/home-pages/filter-section/filter.section";

export default function Home() {
  return (
    <main>
      <FilterSection />
      <DoctorSection />
    </main>
  );
}
