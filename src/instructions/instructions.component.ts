import { Component, OnInit } from '@angular/core';
import { HttpService }  from '../app/http.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  isChecked :boolean;
  subjectSelected: any;
  subjectsList: any;
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.getSubjectsList();
    this.isChecked=false;
  }

  onChange(name,value){
    if(name == 'subject')
      this.subjectSelected = value;
      sessionStorage.setItem('SubjectId', this.subjectSelected);
  }

  getSubjectsList() {
    var dataObs = this._httpService.getSubjects();
    dataObs.subscribe(data => {
      if (data['success'] == 1) {
        this.subjectsList = data['data'];
      }
    })
  }

}
