import { ICurrency } from "./currency.type";
import { IHospital } from "./hospital.type";
import { IMedia } from "./media.type";
import { ISpecialization } from "./specialization.type";

// Interface for Doctors

export interface IDoctors {
  about: string;
  about_preview: string;
  doctor_id: string;
  experience: string;
  hospital: IHospital[];
  is_popular: boolean;
  name: string;
  overview: string;
  photo: IMedia;
  price: ICurrency;
  sip: string;
  slug: string;
  specialization: ISpecialization;
}
