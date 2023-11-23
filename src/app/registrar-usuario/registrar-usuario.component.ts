import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrarUsuarioService } from '../listarService/registrar-usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  userForm: FormGroup;
  errorMessage: String;

  showRegistrarUsuario: boolean = true

  constructor(private formBuilder: FormBuilder, private registarUsuarioService: RegistrarUsuarioService, private router: Router){
    this.userForm = this.formBuilder.group({
      nombre:['',Validators.required],
      correo:['',Validators.compose([Validators.required,Validators.email])],
      contrasena:['',Validators.required],
      nombrePerfil:['',Validators.required]

    });
  }
  ngOnInit(){}

   onSubmit(){

    if (this.userForm.valid) {
      const userData = this.userForm.value;
      console.log(userData)
      this.registarUsuarioService.addUser(userData).subscribe(
        (response) => {
          console.log('se agrego en usuario',response)
          this.router.navigate([''])
        },
        (error) => {
          if (error.status === 409) {
            this.errorMessage = error.error;
            console.error(this.errorMessage);

          }
        console.error(error)
        }
      );
    }
  }

}


