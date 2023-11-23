import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneroService } from 'src/app/objetoServices/genero.service';

@Component({
  selector: 'app-form-genero',
  templateUrl: './form-genero.component.html',
  styleUrls: ['./form-genero.component.css']
})
export class FormGeneroComponent implements OnInit {

  generoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private generoService: GeneroService, private router: Router){
    this.generoForm = this.formBuilder.group({
      nombre: ['',Validators.required]
    });
  }
  ngOnInit(){}

   onSubmit(){
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
    if (this.generoForm.valid) {
      const generoData = this.generoForm.value;
      console.log(generoData)
      this.generoService.save(generoData, jwtToken).subscribe(
        (response) => {
          console.log('se agrego genero', response)
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
