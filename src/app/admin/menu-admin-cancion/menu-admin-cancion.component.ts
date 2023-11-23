import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Track } from 'src/app/modelo/track.interface';
import { TrackService } from 'src/app/objetoServices/track.service';

@Component({
  selector: 'app-menu-admin-cancion',
  templateUrl: './menu-admin-cancion.component.html',
  styleUrls: ['./menu-admin-cancion.component.css']
})
export class MenuAdminCancionComponent implements OnInit {
  track_id: number | null = null;
  track: Track | null = null;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  constructor(private route: ActivatedRoute, private trackService: TrackService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.track_id = Number(params.get('id'));
      if (this.track_id !== null) {
        this.trackService.detail(this.track_id).subscribe(
          (data) => {
            this.track = data;

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
  }

  public deleteTrack() {
    if (this.track_id !== null) {
      this.trackService.delete(this.track_id).subscribe(
        () => {
          this.router.navigate(['/admin/menu-admin-album'])
          console.log('Track eliminado con éxito');
        },
        (error) => {
          console.error('Error al eliminar el track:', error);
        }
      );
    }
  }

}
