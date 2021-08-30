import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:Boolean = false
  constructor(private _AuthService:AuthService) {
  }


  islogOut(){
    this._AuthService.logOut()
  }


    ngOnInit(): void {
      this._AuthService.currentUser.subscribe(()=>{
        if(this._AuthService.currentUser.getValue() !=null){
          this.isLogin = true;
          
  
        }else{
         
          this.isLogin = false;
  
        }
      });
    }
  }


