
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenPostBackendService } from 'src/app/autenticacionYRegistro/token-post-backend.service';
import { IdleService } from 'src/app/idle.service';
import { Track } from 'src/app/modelo/track.interface';
import { TrackService } from 'src/app/objetoServices/track.service';
import { VotoService } from 'src/app/objetoServices/voto.service';
@Component({
  selector: 'app-menu-cliente-cancion-detalle',
  templateUrl: './menu-cliente-cancion-detalle.component.html',
  styleUrls: ['./menu-cliente-cancion-detalle.component.css']
})
export class MenuClienteCancionDetalleComponent implements OnInit {
  track_id: number | null = null;
  track: Track | null = null;
  isUserActive: boolean;
  userInfo: any;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  constructor(private route: ActivatedRoute, private trackService: TrackService, private votoService: VotoService, private idleService: IdleService, private router: Router, private postBackendAuthService: TokenPostBackendService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.track_id = Number(params.get('id'));
      if (this.track_id !== null) {
        const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
        this.trackService.detail(this.track_id,jwtToken).subscribe(
          (data) => {

            this.track = data;
            console.log(this.track);
            console.log(this.track?.album?.trackListing);
          },
          (error) => {
            console.error('Error fetching album details:', error);
          }
        );

        this.postBackendAuthService.sendPostRequestWithToken(jwtToken).subscribe(
          (response) => {
            this.userInfo = response;
            const userId = this.userInfo.id;
            console.log('User ID:', userId);

            this.checkVotoExistence(userId, jwtToken);
          },
          (error) => {
            console.error('Error fetching user info:', error);
          }
        );

        this.idleService.isUserActive().subscribe((isActive: boolean) => {
          this.isUserActive = isActive;

          if (!isActive) {

            localStorage.removeItem('jwtToken');


            this.router.navigate(['/home']);

            console.log('User is idle. Redirecting...');
          }
        });

      }
    }});


  }
  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);

    if (this.selected) {
      const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
      console.log(this.track?.album?.trackListing);
      if(this.track && this.track.album){
        const trackData = {
          track_id: this.track.track_id,
          title: this.track.title,
          duration: this.track.duration,
          album: {
            album_id: this.track.album.album_id,
            name: this.track.album.name,
            artist: this.track.album.artist,
            type: this.track.album.type,
            release_date: this.track.album.release_date,
            rym_rating: this.track.album.rym_rating,
            language: this.track.album.language,
            genres: this.track.album.genres,
            colorscheme: this.track.album.colorscheme,
            recomendar: []
          }
        }

      this.votoService.save(trackData, jwtToken).subscribe(
        (data) => {
          console.log('Vote saved successfully:', data);
        },
        (error) => {
          console.error('Error saving vote:', error);
        }
      );

  }
  }}}

  private checkVotoExistence(userId: number, token: string) {

      if (this.track_id !== null && userId !== null) {
        this.votoService.check(this.track_id, userId, token).subscribe(
          (result) => {
            console.log('Voto existence result:', result);
            // You can handle the result as needed
          },
          (error) => {
            console.error('Error checking voto existence:', error);
          }
        );
      }
    }

    formatDuration(durationMillis: number| null): string {
      if (durationMillis === null) {
        return '';
      }

      const totalSeconds = Math.floor(durationMillis / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');

      return `${formattedMinutes}:${formattedSeconds}`;
    }

  onUserInteraction(): void {
    this.idleService.resetIdleTimer();
  }
}
