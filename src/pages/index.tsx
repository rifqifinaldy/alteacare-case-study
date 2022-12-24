import { getDoctors } from "@/config/endpoint/doctors/doctor";
import DoctorSection from "@/homepages/doctor-section/doctor.section";
import FilterSection from "@/homepages/filter-section/filter.section";
import { useEffect, useState } from "react";
import { IDoctors } from "types/doctor.type";

export async function getServerSideProps() {
  // Data to be reused for return function
  let data, status;
  try {
    const result = await getDoctors();
    // Assign Status to True and Data if the response are success
    data = result.data.data;
    status = true;
  } catch (error) {
    // Set Status to False if there's an error Occured
    console.log(error);
    status = false;
  }
  // pass the props to the components
  return {
    props: { data, status },
  };
}

export default function Home(props: { data: IDoctors[]; status: boolean }) {
  // Redefine Server Side Props
  const { data, status } = props;

  // Assign the server side data to client side for reactivity
  const [doctors, setDoctors] = useState<IDoctors[]>(data);

  // Add Error handler in an error has occured
  useEffect(() => {
    if (status === false) {
      console.log("An Error Has Occured");
    }
  }, [status]);

  // Render UI's / Components
  return (
    <main id="home-page">
      {/* Home Page Sections */}
      <FilterSection />
      <DoctorSection doctors={doctors} />
    </main>
  );
}
