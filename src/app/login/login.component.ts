import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService ,private _Router:Router) { 
    
  }
  error:string="";
  color:any="";
  alert:any = "";
  loginForm =new FormGroup({
    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })

  sendLogin(loginForm: any){
    this._AuthService.loginPost(loginForm.value).subscribe((Data)=>{
      if(Data.message == "success"){
        localStorage.setItem('userToken',Data.token)
       this._AuthService.getUserToken()
        this._Router.navigate(['/home'])
      }else{

        this.color= 'color:red;';
        this.alert = 'alert alert-danger py-2 ';
       this.error = Data.message
      }
    })
  }

  ngOnInit(): void {
  }












}