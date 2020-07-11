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

    private url = 'http://localhost:3000/getQuestions';

    getQuestionsFromDatabase() {
      return this.http.post(this.url, this.httpOptions);
    }

  }