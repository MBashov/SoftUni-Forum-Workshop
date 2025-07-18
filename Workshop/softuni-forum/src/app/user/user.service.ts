import { Injectable } from '@angular/core';
import { UserForAut } from '../types/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    USER_KEY: string = '[user]';
    user: UserForAut | null = null;

    constructor() {
        try {

        } catch (error) {

        }
    }

    login() {
        this.user = {
            firstName: 'John',
            email: 'john@doe.mail.com',
            phoneNumber: '122-123-321',
            password: '1234',
            id: '123456ads123dsa2',
        }
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    }

    logout() { 
        this.user = null;
        localStorage.removeItem(this.USER_KEY);
    }

}
