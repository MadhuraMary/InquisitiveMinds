import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(private http: HttpClient) {
    }

    httpOptions = {
      headers: new HttpHeaders({   
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json'    
      })
    };

    getUser(username, password) {
      var url = 'http://localhost:3000/getUser';
      return this.http.post(url,{username:username, password:password}, this.httpOptions);
    }

    getQuestions(subjectId) {
      var url = 'http://localhost:3000/getQuestions';
      return this.http.post(url,{subjectid:subjectId}, this.httpOptions);
    }

    getQueryByTeacherId(teacherId) {
      var url = 'http://localhost:3000/getQueryByTeacher';
      return this.http.post(url,{teacherId:teacherId}, this.httpOptions);
    }

    getQueryByStudentId(studentId) {
      var url = 'http://localhost:3000/getQueryByStudent';
      return this.http.post(url,{studentId:studentId}, this.httpOptions);
    }

    getSubjects() {
      var url = 'http://localhost:3000/getAllSubject';
      return this.http.post(url, this.httpOptions);
    }

    addQuestion(subjectid, question, option1, option2, option3,option4,correctAnswer,option1Desc,option2Desc,option3Desc,option4Desc,userId){
      var url = 'http://localhost:3000/addQuestion';
      return this.http.post(url,{subjectid: subjectid, question:question, option1:option1, option2:option2, option3:option3,option4:option4,correctAnswer:correctAnswer,option1Desc:option1Desc,option2Desc:option2Desc,option3Desc:option3Desc,option4Desc:option4Desc,userId:userId}, this.httpOptions);
    }


    updateQuery(answer, studentQueryId){
      var url = 'http://localhost:3000/updateQuery';
      return this.http.post(url,{answer:answer,studentQueryId:studentQueryId}, this.httpOptions);
    }

    postQuery(studentId, questionId, studentQuestion, teacherId){
      var url = 'http://localhost:3000/postQuery';
      return this.http.post(url,{studentId:studentId,questionId:questionId, studentQuestion:studentQuestion,teacherId:teacherId}, this.httpOptions);
    }

    submitTest(userId,subjectId,testDetails){
      var url = 'http://localhost:3000/submitTest';
      const payload = JSON.stringify(testDetails);
      return this.http.post(url,{userId:userId,subjectId:subjectId, testDetails:testDetails}, this.httpOptions);
    }

  }