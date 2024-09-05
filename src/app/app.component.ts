import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router  } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CommonModule, Location } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LoginComponent, SignupComponent, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-auth';

  constructor(private router: Router, private location: Location) {}

  isAuthRoute(): boolean {
    const path = this.location.path();
    return path === '/login' || path === '/signup';
  }
}
