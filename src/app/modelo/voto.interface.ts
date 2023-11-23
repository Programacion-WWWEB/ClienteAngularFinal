import { Track } from "./track.interface";
import { UsuarioVotante } from "./usuarioVotante.interface";

export interface Voto{

  id: number
  track_id: number
  usuarioVotante: UsuarioVotante
  track : Track

}
