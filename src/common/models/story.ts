import { Image } from "./image";
import { Post } from "./post";

export interface Story {
  title: string;
  description: string;
  path: string;
  slug: string;
  title_image: Image;
  created_at: Date;
  posts_count: number;
  posts?: Post;
}
