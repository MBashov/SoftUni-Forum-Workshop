import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { Loader } from '../../shared/loader/loader';
import { RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
    selector: 'app-themes-list',
    imports: [Loader, RouterLink],
    templateUrl: './themes-list.html',
    styleUrl: './themes-list.css'
})
export class ThemesList implements OnInit {
    themes: Theme[] = [];
    isLoading: boolean = true;  
    
    constructor(private apiService: ApiService, private userService: UserService) { }

    ngOnInit(): void {
        this.apiService.getThemes().subscribe((themes: Theme[]) => {
            this.themes = themes;
            this.isLoading = false;
        });
    }
}
