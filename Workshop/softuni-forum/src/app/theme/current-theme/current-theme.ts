import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from '../../user/user.service';

@Component({
    selector: 'app-current-theme',
    imports: [],
    templateUrl: './current-theme.html',
    styleUrl: './current-theme.css',
})
export class CurrentTheme implements OnInit {
    theme = {} as Theme;
    
    constructor(private route: ActivatedRoute, private apiService: ApiService, private userService: UserService) { }

    get firstName(): string {
        return this.userService.user?.firstName || '';
    }

    ngOnInit(): void {
        const themeId: string = this.route.snapshot.params['themeId'];

        this.apiService.getSingleTheme(themeId).subscribe(theme => {
            this.theme = theme;
        });
    }
}
