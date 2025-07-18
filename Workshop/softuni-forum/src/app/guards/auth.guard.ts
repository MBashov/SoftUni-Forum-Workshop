import { inject } from "@angular/core"
import { UserService } from "../user/user.service"
import { CanActivateFn, Router } from "@angular/router";

export const AuthGuard: CanActivateFn = () => {
    const userService = inject(UserService);
    const router = inject(Router);

    if (userService.isLoggedIn) {
        return true;
    } else {
        return router.navigate(['/login']);
    }
}