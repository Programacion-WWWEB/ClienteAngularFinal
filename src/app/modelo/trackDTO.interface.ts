import { Albu } from "./albuDto.interface";

export interface TrackDTO{

  title: string;
  duration: string | null;
  album: Albu;
}
