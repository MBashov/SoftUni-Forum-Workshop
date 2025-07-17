import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { Loader } from '../../shared/loader/loader';

@Component({
    selector: 'app-themes-list',
    imports: [Loader],
    templateUrl: './themes-list.html',
    styleUrl: './themes-list.css'
})
export class ThemesList implements OnInit {
    themes: Theme[] = [];
    isLoading: boolean = true;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getThemes().subscribe((themes: Theme[]) => {
            this.themes = themes;
            this.isLoading = false;
        });
    }
}
