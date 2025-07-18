import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private userService: UserService, private router: Router) { }


  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }
  get firstName(): string {
    return this.userService.user?.firstName || '';
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
