import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Error } from './error/error';
import { Register } from './user/register/register';
import { Login } from './user/login/login';
import { Profile } from './user/profile/profile';
import { AddTheme } from './theme/add-theme/add-theme';
import { Main } from './main/main';
import { CurrentTheme } from './theme/current-theme/current-theme';

export const routes: Routes = [
    { path: 'home', component: Home, },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //* User routing
    { path: 'register', component: Register },
    { path: 'login', component: Login },
    { path: 'profile', component: Profile },
    //* Theme routing
    {
        path: 'themes',
        children: [
            { path: '', component: Main },
            { path: ':themeId', component: CurrentTheme },
        ],
    },
    { path: 'add-theme', component: AddTheme },
    { path: '404', component: Error },
    { path: '**', redirectTo: '/404' },
];
