import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/objetoServices/album.service';

@Component({
  selector: 'app-form-album',
  templateUrl: './form-album.component.html',
  styleUrls: ['./form-album.component.css']
})
export class FormAlbumComponent implements OnInit {

  albumForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private albumService: AlbumService, private router: Router){
    this.albumForm = this.formBuilder.group({
      name: ['',Validators.required],
      artist: ['',Validators.required],
      type: ['',Validators.required],
      release_date: ['',Validators.required],
      rym_rating: ['',Validators.required],
      language: ['',Validators.required],
      genres: ['',Validators.required],
      colorscheme: ['',Validators.required]
    });
  }
  ngOnInit(){}

   onSubmit(){

    if (this.albumForm.valid) {
      const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
      const albumData = this.albumForm.value;
      console.log(albumData)
      this.albumService.save(albumData, jwtToken).subscribe(
        (response) => {
          console.log('se agrego album', response)
          window.location.reload();
        },
        (error) => {
        console.error('error fetching data', error)
        }
      );
    }
  }

}
}
