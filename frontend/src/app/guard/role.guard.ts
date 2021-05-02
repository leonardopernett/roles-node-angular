import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '@app/pages/auth/services/auth.service';

import decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){

  }

  canActivate(route:ActivatedRouteSnapshot): boolean {
    const token = JSON.parse(localStorage.getItem('token'))
    const tokenPayload:any =  decode(token)
    if(!this.authService.readToken() || tokenPayload.roles !==route.data.res){
       this.router.navigate(['/auth/login'])
       return false
    }
    return true;
  }
  
}
