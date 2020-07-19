import { Component, OnInit } from '@angular/core';
import { HttpService }  from '../app/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addQuestion',
  templateUrl: './addQuestion.component.html',
  styleUrls: []
})
export class addQuestionComponent implements OnInit {
  subjectsList:[];
  userId: string = '';

  subjectSelected = '';
  question: string = '';
  option1: string = '';
  option2: string = '';
  option3: string = '';
  option4: string = '';
  option1Desc: string = '';
  option2Desc: string = '';
  option3Desc: string = '';
  option4Desc: string = '';
  correctAnswer: string = '';
  isSuccess: boolean = false;
  isHidden: boolean = true;
  msgHeading = '';
  msgContent = '';
  constructor(private _httpService:HttpService, private route: ActivatedRoute) { 
    this.subjectsList = [];
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
  });
  }

  ngOnInit() {
    this.userId=sessionStorage.getItem('UserId');
    this.getSubjectsList();
    
  }

  getSubjectsList() {
    var dataObs = this._httpService.getSubjects();
    dataObs.subscribe(data => {
      if (data['success'] == 1) {     
        this.subjectsList = data['data'];
      }
    })
  }

  onChange(name,value){
    if(name == 'subject')
      this.subjectSelected = value;
    if(name == 'correctAnswer')
      this.correctAnswer = value;
  }

  onSave() {
    var flag = true;


    if(this.subjectSelected === '')
    {
      flag = false;
      document.getElementById("subjectValidation").style.color = "red";
      document.getElementById("subjectValidation").innerHTML = "Please select a subject";
    }
    else {
      document.getElementById("subjectValidation").innerHTML = "";
    }
    if(this.question === '')
    {
      flag = false;
      document.getElementById("questionValidation").style.color = "red";
      document.getElementById("questionValidation").innerHTML = "Please enter a question";
    } else {
      document.getElementById("questionValidation").innerHTML = "";
    }
    if(this.correctAnswer === '')
    {
      flag = false;
      document.getElementById("CorrectAnswerValidation").style.color = "red";
      document.getElementById("CorrectAnswerValidation").innerHTML = "Please select a correct answer";
    }
    else{
      document.getElementById("CorrectAnswerValidation").innerHTML = "";
      var selectedAnswer = this.correctAnswer;
      if(selectedAnswer === 'option1' ){
        if(this.option1 === ''){
          flag = false;
          document.getElementById("CorrectAnswerValidation").style.color = "red";
          document.getElementById("CorrectAnswerValidation").innerHTML = "Please enter a option 1";
        }
        else{
          this.correctAnswer = this.option1;
        }       
      }
      if(selectedAnswer === 'option2' ){
        if(this.option2 === ''){
          flag = false;
          document.getElementById("CorrectAnswerValidation").style.color = "red";
          document.getElementById("CorrectAnswerValidation").innerHTML = "Please enter a option 2";
        }  
        else{
          this.correctAnswer = this.option2;
        }          
      }
      if(selectedAnswer === 'option3' ){
        if(this.option3 === ''){
          flag = false;
          document.getElementById("CorrectAnswerValidation").style.color = "red";
          document.getElementById("CorrectAnswerValidation").innerHTML = "Please enter a option 3";
        } else{
          this.correctAnswer = this.option3;
        }          
      }
      if(selectedAnswer === 'option4' ){
        if(this.option4 === ''){
          flag = false;
          document.getElementById("CorrectAnswerValidation").style.color = "red";
          document.getElementById("CorrectAnswerValidation").innerHTML = "Please enter a option 4";
        }  else{
          this.correctAnswer = this.option4;
        }          
      }
    }

    if (flag) {
      this.isHidden = false;
      var dataObs = this._httpService.addQuestion(this.subjectSelected, this.question, this.option1, this.option2, this.option3, this.option4, this.correctAnswer, this.option1Desc, this.option2Desc, this.option3Desc, this.option4Desc, this.userId);
      dataObs.subscribe(data => {
        if (data['success'] != 1) {
          this.msgHeading = 'Fail!!';
          this.msgContent = 'Please try again';
          console.log(data['message'])
        }
        else {
          this.isSuccess = true;
          this.msgHeading = 'Sucess!!';
          this.msgContent = data['message'];
        }
      })
    }
  }    

}
