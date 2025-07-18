import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-theme',
  imports: [],
  templateUrl: './add-theme.html',
  styleUrl: './add-theme.css'
})
export class AddTheme {
  constructor(private apiService: ApiService) {}

  addTheme(event: Event, themeName: string, postText: string) {
    event.preventDefault();
    this.apiService.createTeam(themeName, postText).subscribe(data => {
      console.log(data);
    });
  }
}
