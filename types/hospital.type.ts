import { IMedia } from "./media.type";

// Interface for Hospital Master Data
export interface IHospital {
  id: string;
  name: string;
  icon?: IMedia;
  image?: IMedia;
}
