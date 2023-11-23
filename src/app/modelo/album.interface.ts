import { Track } from "./track.interface";

export interface Album {
  album_id: number;
  name: string;
  artist: string;
  type: string;
  release_date: string;
  rym_rating: number;
  language: string;
  genres: string;
  colorscheme: string;
  trackListing?: Track[];
}
