import { Image } from "./image";
export interface Album {
  title: string;
  slug: string;
  description: string;
  title_image: Image;
  start_date: string;
  end_date: string;
  images_count: number;
}
