import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reister',
  templateUrl: './reister.component.html',
  styleUrls: ['./reister.component.scss']
})
export class ReisterComponent implements OnInit {

  constructor( private _Router:Router ,private _AuthService:AuthService) {
    
   }
   
   
   
   ngOnInit(): void {}

  

  registerform =new FormGroup({
    first_name:new FormControl(null,[Validators.required , Validators.minLength(3),Validators.maxLength(10)]),
    last_name:new FormControl(null,[Validators.required , Validators.minLength(3),Validators.maxLength(10)]),
    age:new FormControl(null,[Validators.required , Validators.min(16)]),
    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })


  message:string ="";
  color:string ="";
  errors:string="";

  register(registerform:FormGroup){
   this._AuthService.registerPost(registerform.value).subscribe((Data)=>{
     if(Data.message == 'success'){
   
       this.color= 'color:green;';
       this.message = 'alert alert-success py-2 ';
      
       this.errors = "sucsess"
       this._Router.navigate(['/login'])
   
   
     }else{
   
       this.color= 'color:red;';
       this.message = 'alert alert-danger py-2 ';
       this.errors = Data.errors.email.message
 



     }
   
    })
  
  }}