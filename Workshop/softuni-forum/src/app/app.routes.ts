import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Register } from './user/register/register';
import { Login } from './user/login/login';
import { Profile } from './user/profile/profile';
import { AddTheme } from './theme/add-theme/add-theme';
import { Main } from './main/main';
import { CurrentTheme } from './theme/current-theme/current-theme';
import { NotFound } from './not-found/not-found';           
import { AuthGuard } from './guards/auth.guard'; 

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
            { path: '', component: Main, canActivate: [AuthGuard] },
            { path: ':themeId', component: CurrentTheme, canActivate: [AuthGuard] },
        ],
    },
    { path: 'add-theme', component: AddTheme, canActivate: [AuthGuard] },
    { path: '404', component: NotFound },
    { path: '**', redirectTo: '/404' },
];
