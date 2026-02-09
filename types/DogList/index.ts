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
  weight: IMeasurement;
  height: IMeasurement;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: IImage;
}
