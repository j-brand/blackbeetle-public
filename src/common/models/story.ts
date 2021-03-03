import { Image } from "./image";
import { Post } from "./post";

export interface Story {
  title: string;
  description: string;
  path: string;
  slug: string;
  title_image: Image;
  posts?: Post;
}
