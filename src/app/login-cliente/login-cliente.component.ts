import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenAuthService } from '../autenticacionYRegistro/token-auth.service';
import { TokenPostBackendService } from '../autenticacionYRegistro/token-post-backend.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  userForm: FormGroup;

  constructor(private router:Router, private formBuilder: FormBuilder, private tokenService: TokenAuthService, private postToken: TokenPostBackendService){

    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  ngOnInit(): void {}

  onSubmit(){

    let jwtToken = null;

    if (this.userForm.valid) {
      const { username, password } = this.userForm.value;
      console.log(username + password)
      this.tokenService.createToken(username, password).subscribe(
        (response) => {
          console.log('se creo el token')
          jwtToken = response.token;
          console.log('Token received:', response.token); // Print the token to the console

          localStorage.setItem('jwtToken', jwtToken);


const [_, payloadBase64]: string[] = jwtToken.split('.');

// Decode and display the payload
const decodedPayload: string = atob(payloadBase64);
console.log(decodedPayload);

          this.postToken.sendPostRequestWithToken(jwtToken).subscribe(
            (postResponse) => {
              console.log('Post Response', postResponse);

              this.router.navigate(['cliente/menu'])
            },
            (postError) => {
              console.log('Post Error', postError);
            }
          );

        },
        (error) => {
        console.error('error fetching data:')
        console.error('Status:', error.status);
        console.error('Status Text:', error.statusText);
        console.error('Error Response:', error.error);
        console.error('Error Response:', error.message);

        }
      );


    }


  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();


}

