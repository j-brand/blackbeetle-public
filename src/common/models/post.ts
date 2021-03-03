import { Image } from "./image";

export interface Post {
  title: string;
  content: string;
  type: string;
  date: Date;
  images?: Image[];
}
