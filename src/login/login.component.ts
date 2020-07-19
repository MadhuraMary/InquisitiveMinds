import { Component, OnInit } from '@angular/core';
import { HttpService }  from '../app/http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  data:any;
  displayErrorMsg:boolean;
  isLoginsuccess: boolean;
  isPageLoaded: boolean;
  constructor(private _httpService:HttpService, private router: Router) { 
    this.data = '';
  }

  ngOnInit() {
  }

  aquireData():boolean{   
     var dataObs = this._httpService.getUser((<HTMLInputElement>document.getElementById("email")).value,(<HTMLInputElement>document.getElementById("password")).value);
       
     dataObs.subscribe(data=>{
        this.displayErrorMsg=false;
        console.log(data);

        if(data['success'] != 1){
          this.isLoginsuccess=false;
          this.displayErrorMsg=true;
        }
        else{
          this.isLoginsuccess=true;
          this.data = data['data'];
        console.log(this.data);  
        sessionStorage.setItem('Name',this.data[0].NAME);
        sessionStorage.setItem('Role',this.data[0].ROLE)
        sessionStorage.setItem('Userid',this.data[0].USER_ID)
        sessionStorage.setItem('UserName',this.data[0].USER_NAME);     
        }        
    })
    return this.isLoginsuccess;
  }

  login(){
    const isSuccess=this.aquireData();
    if(isSuccess){
      this.router.navigate(['/home']);
    }
  }
}
