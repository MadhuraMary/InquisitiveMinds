import { Component, OnInit } from '@angular/core';
import { HttpService }  from '../app/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  data:any;
  constructor(private _httpService:HttpService) { 
    this.data = '';
  }

  ngOnInit() {
    this.aquireData();
  }

  aquireData(){
    var dataObs = this._httpService.getQuestionsFromDatabase();
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

}
