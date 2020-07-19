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
  constructor(private _httpService:HttpService, private router: Router) { 
    this.data = '';
  }

  ngOnInit() {
    this.aquireData();
  }

  aquireData(){
    var dataObs = this._httpService.getQuestions('S1');
    dataObs.subscribe(data=>{
      if(data['success'] != 1){
        console.log(data);
      }
      else{
        console.log(data);
        this.data = data['data'];      
      }
    })
  }

  login(){
    this.router.navigate(['/home']);
  }
}
