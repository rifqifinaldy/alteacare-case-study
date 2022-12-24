import { getDoctors } from "@/config/endpoint/doctors/doctor";
import { removeDuplicateBy } from "@/helpers/duplicate.remover";
import DoctorSection from "@/homepages/doctor-section/doctor.section";
import FilterSection from "@/homepages/filter-section/filter.section";
import { FormEvent, useCallback, useEffect, useState } from "react";
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
  const [specializations, setSpecializations] = useState<ISpecialization[]>([]);
  // Filtered List Value
  const [filterValue, setFilterValue] = useState<any>({
    search: "",
    hospitals: [],
    specializations: [],
  });

  // Add Error handler in an error has occured
  useEffect(() => {
    if (status === false) {
      console.log("An Error Has Occured");
    }
  }, [status]);

  const getMasterList = useCallback((datas: IDoctors[]) => {
    let tmpFilterValue = { ...filterValue };
    // Mutate Specialization Master from Available Doctors
    let tmpSpecialization = datas.map((doctor) => {
      return {
        id: doctor.specialization.id,
        name: doctor.specialization.name,
      };
    });
    // Mutate Hospitals Master from Available Doctors
    let tmpHospitals = datas.map((doctor) => {
      return {
        id: doctor.hospital[0].id,
        name: doctor.hospital[0].name,
      };
    });
    // Remove Duplicate Keys Values By their ID
    const resultSpecialization = removeDuplicateBy(tmpSpecialization, "id");
    const resultHospitals = removeDuplicateBy(tmpHospitals, "id");
    // Set State to render the master list
    setSpecializations(resultSpecialization);
    setHospitals(resultHospitals);
    // Set Initial Filter Value for the checkbox
    setFilterValue({
      specializations: resultSpecialization.map((item) => item.name),
      hospitals: resultHospitals.map((item) => item.name),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMasterList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMasterList]);

  // Handle Filter by Hospital
  const onFilterByHospital = (e: FormEvent<HTMLInputElement>) => {
    let tmpDoctors = [...doctors];
    const tmpFilter = { ...filterValue };
    if (e.currentTarget.checked === true) {
      tmpFilter.hospitals.push(e.currentTarget.value);
      tmpDoctors = data.filter((doctor) =>
        filterValue.hospitals.includes(doctor.hospital[0].name)
      );
    } else if (e.currentTarget.checked === false) {
      const index = filterValue.hospitals.indexOf(e.currentTarget.value);
      tmpFilter.hospitals.splice(index, 1);
      tmpDoctors = data.filter((doctor) =>
        filterValue.hospitals.includes(doctor.hospital[0].name)
      );
    }
    setFilterValue(tmpFilter);
    setDoctors(tmpDoctors);
  };

  // Handle Filter by Specializations
  const onFilterBySpecialization = (e: FormEvent<HTMLInputElement>) => {
    let tmpDoctors = [...doctors];
    const tmpFilter = { ...filterValue };
    if (e.currentTarget.checked === true) {
      tmpFilter.specializations.push(e.currentTarget.value);
      tmpDoctors = data.filter((doctor) =>
        filterValue.specializations.includes(doctor.specialization.name)
      );
    } else if (e.currentTarget.checked === false) {
      const index = filterValue.specializations.indexOf(e.currentTarget.value);
      tmpFilter.specializations.splice(index, 1);
      tmpDoctors = data.filter((doctor) =>
        filterValue.specializations.includes(doctor.specialization.name)
      );
    }
    setFilterValue(tmpFilter);
    setDoctors(tmpDoctors);
  };

  // On Search Function
  const onSearch = (e: FormEvent<HTMLInputElement>) => {
    let searchValue = e.currentTarget.value;
    setFilterValue({ ...filterValue, search: searchValue });
  };

  // Render UI's / Components
  return (
    <main id="home-page">
      {/* Home Page Sections */}
      {/* Filter Sections */}
      <FilterSection
        filterValue={filterValue}
        hospitals={hospitals}
        specializations={specializations}
        onSearch={onSearch}
        onFilterByHospital={onFilterByHospital}
        onFilterBySpecialization={onFilterBySpecialization}
      />
      {/* Doctors Section */}
      <DoctorSection searchValue={filterValue.search} doctors={doctors} />
    </main>
  );
}
