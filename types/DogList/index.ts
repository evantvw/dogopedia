interface IMeasurement {
  imperial: string;
  metric: string;
}

interface IImage {
  id: string;
  width: number;
  height: number;
  url: string;
}

export interface IBreed {
  id: number;
  name: string;
  species_id: string;
  life_span: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  bred_for: string;
  breed_group: string;
  history: string;
  reference_image_id: string;
  weight: IMeasurement;
  height: IMeasurement;
  image: IImage;
}
