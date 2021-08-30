import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import  jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) { }


    registerPost(formData:any):Observable<any>
    {  
     return  this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
    }


     loginPost(formData:any):Observable<any>
     {
       return  this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formData)
     }

     currentUser:any = new BehaviorSubject(null)
     getUserToken(){
       let token:any = localStorage.getItem('userToken')
       
       this.currentUser.next(jwtDecode(token)) 
       
      }
      logOut(){
        this.currentUser.next(null);
        localStorage.removeItem('userToken');
        this._Router.navigate(['/login'])
      }













}
