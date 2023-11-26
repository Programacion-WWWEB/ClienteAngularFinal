import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IdleService } from 'src/app/idle.service';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent {

  isUserActive: boolean;

  constructor(private idleService: IdleService, private router:Router) {}

  ngOnInit(): void {

    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{

    this.idleService.isUserActive().subscribe((isActive: boolean) => {
      this.isUserActive = isActive;

      if (!isActive) {

        localStorage.removeItem('jwtToken');


        this.router.navigate(['/home']);

        console.log('User is idle. Redirecting...');
      }
    });
  }
  }

  onUserInteraction(): void {
    this.idleService.resetIdleTimer();
  }

}
