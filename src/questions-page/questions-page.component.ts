import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {
  allQuestions: any;
  userId: string = "";
  subjectId: string = "";
  constructor(private _httpService:HttpService, private router: Router) { }

  ngOnInit() { 
    this.userId=sessionStorage.getItem('UserId');
    this.subjectId=sessionStorage.getItem('SubjectId');
    if(this.subjectId == null || this.subjectId == undefined){
      this.subjectId='S1';
    }
    this.getQuestions()
  }

  getQuestions(){
    var dataObs = this._httpService.getQuestions(this.subjectId);
    dataObs.subscribe(data => {
      if (data['success'] == 1) {     
        this.allQuestions = data['data'];
      }
    })
  }
  cancel(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  onSave(){
    var totalQuestionsCount = this.allQuestions.length;
    var totalCorrectAnswersCount = 0;
    var totalWrongAswersCount = 0;
    var selectedValue = "";
    var selectedOptionDesc;
    var testDetails = [];
    for (let i = 0; i < totalQuestionsCount; i++) {
      var flag = 0;
      var allOptions = document.getElementsByName(this.allQuestions[i]['QUESTION_ID']);
      for(var j = 0; j < allOptions.length; j++) {
        if((<HTMLInputElement>allOptions[j]).checked){
          selectedValue = (<HTMLInputElement>allOptions[j]).value;
          var index = j + 1;
          selectedOptionDesc = "OPTION_" + index  + "_FURTHER_DETAILS";
        }     
      }
      document.getElementById(this.allQuestions[i]['QUESTION_ID']).innerHTML = "";
      if(selectedValue ===  this.allQuestions[i]['CORRECT_ANSWER']){
        flag = 1;
        document.getElementById(this.allQuestions[i]['QUESTION_ID']).style.color = "green";
        document.getElementById(this.allQuestions[i]['QUESTION_ID']).innerHTML = "Correct Answer!! " + this.allQuestions[i][selectedOptionDesc];
        totalCorrectAnswersCount += 1;
      }
      else if(selectedValue === ""){
        document.getElementById(this.allQuestions[i]['QUESTION_ID']).style.color = "red";
        document.getElementById(this.allQuestions[i]['QUESTION_ID']).innerHTML = "Wrong Answer!! " + "Please select a option";
        totalWrongAswersCount += 1;
      }
      else{
        document.getElementById(this.allQuestions[i]['QUESTION_ID']).style.color = "red";
        document.getElementById(this.allQuestions[i]['QUESTION_ID']).innerHTML = "Wrong Answer!! " + this.allQuestions[i][selectedOptionDesc];
        totalWrongAswersCount += 1;
      }
      var obj = {questionId: this.allQuestions[i]['QUESTION_ID'], score: flag}    
      testDetails.push(obj) ;
    }
    document.getElementById("result").innerHTML = "Total Question: " + totalQuestionsCount + "<br/>" + "Correct Answers: " + totalCorrectAnswersCount+ "<br/>" + "Wrong Answers: " + totalWrongAswersCount;
    var dataObs = this._httpService.submitTest(this.userId,  this.subjectId, testDetails);
    dataObs.subscribe(data => {
      if (data['success'] == 1) {     
        console.log(data['message']) ;
      }
      else {
          console.log(data)
      }
    })
    
  }

}
