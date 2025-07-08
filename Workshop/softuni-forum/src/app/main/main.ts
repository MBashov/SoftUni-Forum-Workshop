import { Component } from '@angular/core';
import { ThemesList } from "./themes-list/themes-list";
import { PostsList } from "./posts-list/posts-list";

@Component({
  selector: 'app-main',
  imports: [ThemesList, PostsList],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
