import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album } from '../modelo/album.interface';
import { AlbumService } from '../objetoServices/album.service';

@Component({
  selector: 'app-select-album',
  templateUrl: './select-album.component.html',
  styleUrls: ['./select-album.component.css']
})
export class SelectAlbumComponent implements OnInit {

  @Output() albumSelected: EventEmitter<number> = new EventEmitter<number>();

  public albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {

    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
    this.albumService.lista(jwtToken).subscribe(
      (albums: Album[]) => {
        this.albums = albums;
      },
      (error) => {
        console.error('Error fetching albums:', error);
      }
    );
    }
  }

  onAlbumSelected(albumId: number): void {
    this.albumSelected.emit(albumId);
  }
}
