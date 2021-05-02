import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserResponse } from '@app/shared/interface/user.interface';
import { environment } from '@env/environment';
import {Location} from '@angular/common'
import { throwError } from 'rxjs';
import {map} from 'rxjs/operators'

import {JwtHelperService} from '@auth0/angular-jwt'
import { Router } from '@angular/router';



const helper = new JwtHelperService()

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isExpired:boolean

  constructor(
    private http:HttpClient,
    private location:Location,
    private router:Router
    
    ) { 
      this.checkToken()
    }


    login(user:User){
      return this.http.post(`${environment.API}/auth/login`, user)
      .pipe(
        map( (res:UserResponse) => {
          const { acessToken } = res
          this.saveToken(acessToken)
          return res
        })
      )
    }

    logout(){
      localStorage.removeItem('token')
      this.location.go('/auth/login')
    }

    checkToken(){
      const token = JSON.parse(localStorage.getItem('token'))
      this.isExpired = helper.isTokenExpired(token)
      this.isExpired ? this.logout() : ''
    }

    readToken(){
       const token = JSON.parse(localStorage.getItem('token'))
       if(token) return true
        this.router.navigate(['/auth/login'])  
    }

    saveToken(token){
      localStorage.setItem('token', JSON.stringify(token))
    }
   
    hanldeError(err){
      let errorMessage = 'error ocurred retrivineg data'
       if(err){
          errorMessage = 'Error code' + err.message
       }
       return throwError(errorMessage)
    }

}
