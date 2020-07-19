import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {
  questions: any;
  isOption1Selected:boolean;
  isOption2Selected:boolean;
  isOption3Selected:boolean;
  isOption4Selected:boolean;
  index:any;
  currentquestion:any;
  correctAttemptCount:any;
  totalQuestionsCount: any;
  endQuestions: boolean;

  constructor(private _httpService:HttpService, private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('index') !=null){
      this.index=sessionStorage.getItem('index');
    }else{
      this.index=0;
      sessionStorage.setItem('index',this.index);
    }
    if(sessionStorage.getItem('correctAttempt') !=null){
      this.correctAttemptCount=sessionStorage.getItem('correctAttempt');
    }else{
      this.correctAttemptCount=0;
      sessionStorage.setItem('correctAttempt',this.correctAttemptCount);
    }
    this.getQuestions();    
  }

  onSave(){
    this.index++;
    if(this.index<this.totalQuestionsCount){
      this.currentquestion=this.questions[this.index];
      sessionStorage.setItem('index',this.index);
      this.router.navigateByUrl('/questionsPage');
    }else{
      this.endQuestions=true;
      sessionStorage.clear();
    }
    
  }

  onChange(id:string,targetValue: Event,optionNumber:number){
    if(optionNumber==1){
      this.isOption1Selected=true;
      this.isOption2Selected=false;
      this.isOption3Selected=false;
      this.isOption4Selected=false;
    }else if(optionNumber==2){
      this.isOption1Selected=false;
      this.isOption2Selected=true;
      this.isOption3Selected=false;
      this.isOption4Selected=false;
    }else if(optionNumber==3){
      this.isOption1Selected=false;
      this.isOption2Selected=false;
      this.isOption3Selected=true;
      this.isOption4Selected=false;
    }else{
      this.isOption1Selected=false;
      this.isOption2Selected=false;
      this.isOption3Selected=false;
      this.isOption4Selected=true;
    }
  }

  getQuestions(){
    var dataObs = this._httpService.getQuestions('S1');
    dataObs.subscribe(data => {
      if (data['success'] == 1) {     
        this.questions = data['data'];
      }
      console.log(this.questions);
      this.totalQuestionsCount=this.questions.length;
      this.currentquestion=this.questions[this.index];
    })
  }

}
