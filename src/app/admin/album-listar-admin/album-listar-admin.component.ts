import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/modelo/album.interface';
import { AlbumService } from 'src/app/objetoServices/album.service';

@Component({
  selector: 'app-album-listar-admin',
  templateUrl: './album-listar-admin.component.html',
  styleUrls: ['./album-listar-admin.component.css']
})
export class AlbumListarAdminComponent implements OnInit {

  showInfoAlbumConTracks: boolean = true

  albumes: Album[] = [];
  constructor(private albumService: AlbumService, private router: Router) {

  }

  ngOnInit(): void {
    this.cargar();
  }

  generateGradient(color: string): string {
    return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 1)`;
  }

  cargar(): void {

    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{

    this.albumService.lista(jwtToken).subscribe(
      data => {
        this.albumes = data;
      },
      err => {
        console.log(err);
      }
    );
    }
  }
  borrar(id: number) {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
    this.albumService.delete(id, jwtToken).subscribe(
      (response) => {
        console.log('se borro album', response)
        window.location.reload();
      },
      (error) => {
        console.error('error fetching data', error)
      }
    );

  };
}
}
