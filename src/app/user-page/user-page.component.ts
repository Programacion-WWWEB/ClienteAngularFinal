import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPostBackendService } from '../autenticacionYRegistro/token-post-backend.service';
import { Track } from '../modelo/track.interface';
import { Voto } from '../modelo/voto.interface';
import { TrackService } from '../objetoServices/track.service';
import { VotoService } from '../objetoServices/voto.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit{

  userInfo: any;
  votos: Voto[];
  tracks: Track[];
  constructor(private postBackendAuthService: TokenPostBackendService, private router: Router, private votoService: VotoService, private trackService: TrackService){}
  ngOnInit(): void {



    const token = localStorage.getItem('jwtToken') || '';

    this.postBackendAuthService.sendPostRequestWithToken(token)
      .subscribe(
        (response) => {

          this.userInfo = response;
          const userId = this.userInfo.id;
          console.log('User ID:', userId);

          this.votoService.lista(token).subscribe((data: Voto[])=>{
            console.log( data )
            this.votos = data

            this.matchUsersByTrack();
          },
          (error) => {
            console.error('Error fetching data:', error);
          })


          console.log('User Info:', this.userInfo);
        },
        (error) => {
          console.error('Error fetching user info:', error);

        }
      );


  }
  matchUsersByTrack() {
    console.log("Usr id:", this.userInfo.id);
    console.log("Votos: ", this.votos)
    const filteredVotes = this.votos.filter((voto) => {
      console.log("voto.usuarioVotante.id:", voto.usuarioVotante.id);
      console.log("this.userInfo.id:", this.userInfo.id);
      return voto.usuarioVotante.id == this.userInfo.id;
    });
    console.log("Filtered Votes:", filteredVotes);

    this.tracks = filteredVotes.map((recomendacion) => recomendacion.track);
  console.log("Tracks:", this.tracks);

  }

  logout(): void {

    localStorage.removeItem('jwtToken');


    this.router.navigate(['/home']);
  }


  }




