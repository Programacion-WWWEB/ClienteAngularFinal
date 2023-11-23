import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/modelo/album.interface';
import { AlbumService } from 'src/app/objetoServices/album.service';

@Component({
  selector: 'app-menu-cliente-cancion',
  templateUrl: './menu-cliente-cancion.component.html',
  styleUrls: ['./menu-cliente-cancion.component.css']
})
export class MenuClienteCancionComponent implements OnInit {

  album_id: number | null = null;
  albums: Album | null = null;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.album_id = Number(params.get('id'));
      if (this.album_id !== null) {
      this.albumService.detail(this.album_id).subscribe(
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
