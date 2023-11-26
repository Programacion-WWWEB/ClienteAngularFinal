import { Albu } from "./albuDto.interface";

export interface TrackDTO{

  title: string;
  duration: number | null;
  album: Albu;
}
