import { getDoctors } from "@/config/endpoint/doctors/doctor";
import { removeDuplicateBy } from "@/helpers/duplicate.remover";
import DoctorSection from "@/homepages/doctor-section/doctor.section";
import FilterSection from "@/homepages/filter-section/filter.section";
import { useCallback, useEffect, useState } from "react";
import { IDoctors } from "types/doctor.type";
import { IHospital } from "types/hospital.type";
import { ISpecialization } from "types/specialization.type";

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
  const [hospitals, setHospitals] = useState<IHospital[]>([]);
  const [specialization, setSpecialization] = useState<ISpecialization[]>([]);

  // Add Error handler in an error has occured
  useEffect(() => {
    if (status === false) {
      console.log("An Error Has Occured");
    }
  }, [status]);

  // Get Hospital List and Remove Duplicate Value By Calling removeDuplicateBy Function
  const getHospitalList = useCallback((datas: IDoctors[]) => {
    let tmpData = datas.map((doctor) => {
      return {
        id: doctor.hospital[0].id,
        name: doctor.hospital[0].name,
      };
    });
    let result = removeDuplicateBy(tmpData, "id");
    return result;
  }, []);

  // Get Hospital List and Remove Duplicate Value By Calling removeDuplicateBy Function
  const getSpecializationList = useCallback((datas: IDoctors[]) => {
    let tmpData = datas.map((doctor) => {
      return {
        id: doctor.specialization.id,
        name: doctor.specialization.name,
      };
    });
    let result = removeDuplicateBy(tmpData, "id");
    return result;
  }, []);

  useEffect(() => {
    setHospitals(getHospitalList(data));
    setSpecialization(getSpecializationList(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle Filter
  const handleFilter = (e: HTMLInputElement) => {
    console.log(e);
  };

  // Render UI's / Components
  return (
    <main id="home-page">
      {/* Home Page Sections */}
      <FilterSection
        hospitals={hospitals}
        specialization={specialization}
        handleFilter={handleFilter}
      />
      <DoctorSection doctors={doctors} />
    </main>
  );
}
