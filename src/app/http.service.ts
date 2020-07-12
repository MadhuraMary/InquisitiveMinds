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