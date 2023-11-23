import { Album } from "./album.interface";

export interface Track {
  track_id: number;
  title: string;
  duration: string | null;
  album: Album;
}
