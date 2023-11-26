import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdleService } from 'src/app/idle.service';
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
  isUserActive: boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private idleService: IdleService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.album_id = Number(params.get('id'));
      if (this.album_id !== null) {
        const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
      const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
      this.albumService.detail(this.album_id,jwtToken).subscribe(
        (data) => {
          this.albums = data;

        },
        (error) => {
          console.error('Error fetching album details:', error);
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
    }}});
  }

  onUserInteraction(): void {
    this.idleService.resetIdleTimer();
  }
  }
