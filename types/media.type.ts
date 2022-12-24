// Interface for Image, Icon URL
export interface IMediaFormats {
  large: string;
  medium: string;
  small: string;
  thumbnail: string;
}

// Interface for Image, Icon Property
export interface IMedia {
  formats: IMediaFormats;
  size_formatted: string;
  url: string;
}
