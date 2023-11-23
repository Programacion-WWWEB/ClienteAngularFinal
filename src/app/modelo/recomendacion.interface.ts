import { Album } from "./album.interface";
import { Genero } from "./genero.interface";

export interface Recomendacion{

  album_id : number;
  id: number;
  genero: Genero;
  album: Album;

}
