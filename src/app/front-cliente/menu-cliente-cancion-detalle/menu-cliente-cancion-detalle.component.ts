
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  constructor(private route: ActivatedRoute, private trackService: TrackService, private votoService: VotoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.track_id = Number(params.get('id'));
      if (this.track_id !== null) {
        this.trackService.detail(this.track_id).subscribe(
          (data) => {

            this.track = data;
            console.log(this.track);
            console.log(this.track?.album?.trackListing);
          },
          (error) => {
            console.error('Error fetching album details:', error);
          }
        );
      }
    });
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
  }}}}
