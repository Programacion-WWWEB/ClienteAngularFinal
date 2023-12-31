import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/objetoServices/album.service';
import { TrackService } from 'src/app/objetoServices/track.service';

@Component({
  selector: 'app-form-cancion',
  templateUrl: './form-cancion.component.html',
  styleUrls: ['./form-cancion.component.css']
})
export class FormCancionComponent implements OnInit {

  trackForm: FormGroup;
  @Input() album_id: number | null;

  constructor(
    private formBuilder: FormBuilder,
    private trackService: TrackService,
    private albumService: AlbumService, // Add AlbumService to constructor
    private router: Router
  ) {
    this.trackForm = this.formBuilder.group({
      title: ['', Validators.required],
      duration: ['', [Validators.required, durationFormatValidator]],
      album_id: ['', Validators.required]
    });
  }



  ngOnInit() {
    this.loadAlbumDetails();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('album_id' in changes) {
      this.loadAlbumDetails();
    }
  }

  loadAlbumDetails() {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
    if (this.album_id !== null) {
      console.log('Fetching album details for album_id:', this.album_id);
      this.albumService.detail(this.album_id,jwtToken).subscribe(
        (album) => {
          // Update form with album details
          this.trackForm.patchValue({
            album_id: album.album_id,
          });
        },
        (error) => {
          console.error('Error fetching album details:', error);
        }
      );
    }
  }
  }
  onSubmit() {
    if (this.trackForm.valid) {
      console.log(this.trackForm.value.duration)
      const [minutes, seconds] = this.trackForm.value.duration.split(':').map(Number);
    const durationMillis = (minutes * 60 + seconds) * 1000;

    console.log(durationMillis)
      const trackData = {

        title: this.trackForm.value.title,
        duration: durationMillis,
        album: {
          album_id: this.trackForm.value.album_id,

          // Add other album details here if needed
        }
      };

      console.log(trackData);
      const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
      this.trackService.save(trackData, jwtToken).subscribe(
        (response) => {
          console.log('se agrego track');
          window.location.reload();
        },
        (error) => {
          console.error('error fetching data', error);
        }
      );
    }
  }

}


}

function durationFormatValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const durationPattern = /^([0-5]?\d):([0-5]?\d)$/;

  if (control.value && !durationPattern.test(control.value)) {
    return { 'invalidDurationFormat': true };
  }

  const [minutes, seconds] = control.value.split(':').map(Number);
  const milliseconds = (minutes * 60 + seconds) * 1000;


  if (isNaN(milliseconds)) {
    control.setErrors({ 'invalidDurationFormat': true });
  } else {
    control.setErrors(null);
  }

  return null;
}

