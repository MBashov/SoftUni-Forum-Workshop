import { Component } from '@angular/core';
import { ThemesList } from "../theme/themes-list/themes-list";
import { PostsList } from "../posts-list/posts-list";
import { UserService } from '../user/user.service';
import { Home } from "../home/home";
@Component({
  selector: 'app-main',
  imports: [ThemesList, PostsList, Home],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
    constructor(private userService: UserService) {}
  
    get isLoggedIn(): boolean {
      return this.userService.isLoggedIn;
    }
}
