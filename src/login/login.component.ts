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
  isSuccess: boolean = false;
  isHidden: boolean = true;
  msgHeading = '';
  msgContent = '';

  constructor(private _httpService:HttpService, private router: Router) {  }

  ngOnInit() { }

  login(){
    this.isHidden = false;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email != '' && password != ''){
      var dataObs = this._httpService.getUser(email,password);
      dataObs.subscribe(data=>{
        console.log(data)
        if(data['success'] != 1){
          this.isSuccess = false;
          this.msgHeading = 'Fail!!';
          this.msgContent = 'Please enter the valid username and password';
        }
        else{
          if(data['data'].length > 0){
            this.isSuccess = true;
            sessionStorage.setItem('Name',data[0].NAME);
            sessionStorage.setItem('Role',data[0].ROLE)
            sessionStorage.setItem('Userid',data[0].USER_ID)
            sessionStorage.setItem('UserName',data[0].USER_NAME);  
            this.router.navigate(['/home']); 
          }
        }
      })
    }
    else {
      this.isSuccess = false;
      this.msgHeading = 'Fail!!';
      this.msgContent = 'Please enter the username and password';
    }
  }
  
}
