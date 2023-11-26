import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/modelo/album.interface';
import { AlbumService } from 'src/app/objetoServices/album.service';

@Component({
  selector: 'app-track-en-album-listar',
  templateUrl: './track-en-album-listar.component.html',
  styleUrls: ['./track-en-album-listar.component.css']
})
export class TrackEnAlbumListarComponent {

  album_id: number | null = null;
  albums: Album | null = null;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    console.log('FormCancionComponent - album_id:', this.album_id);
  }

  ngOnInit(): void {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
this.album_id = idParam !== null && idParam !== undefined ? +idParam : null;
      if (this.album_id !== null) {
      this.albumService.detail(this.album_id, jwtToken).subscribe(
        (data) => {
          this.albums = data;

        },
        (error) => {
          console.error('Error fetching album details:', error);
        }
      );
      }
    });
  }

}

formatDuration(durationMillis: number | null): string {
  if (durationMillis === null) {
    return ''; // or handle null case as needed
  }

  const totalSeconds = Math.floor(durationMillis / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

}
