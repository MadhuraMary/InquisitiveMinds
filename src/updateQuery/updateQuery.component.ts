import { Component, OnInit } from '@angular/core';
import { HttpService } from '../app/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateQuery',
  templateUrl: './updateQuery.component.html',
  styleUrls: []
})
export class updateQueryComponent implements OnInit {
  studentQueryId: string = '';
  data: any;
  isSuccess: boolean = false;
  isHidden: boolean = true;
  msgHeading = '';
  msgContent = '';

  constructor(private _httpService: HttpService, private route: ActivatedRoute) {
    this.data = '';
    this.route.queryParams.subscribe(params => {
      this.studentQueryId = params['studentQueryId'];
    });
  }

  ngOnInit() {
    this.getQuery();
  }

  getQuery() {
    var dataObs = this._httpService.getQuery(this.studentQueryId);
    dataObs.subscribe(data => {
      if (data['success'] == 1) {
        this.data = data['data'];
        console.log(this.data[0].STUDENT_QUESTION)
      }
    })
  }

  onSave() {
    var flag = true;
    if (this.data[0].ANSWER === '') {
      flag = false;
      document.getElementById("answerValidation").style.color = "red";
      document.getElementById("answerValidation").innerHTML = "Please enter the answer";
    }
    if (flag) {
      this.isHidden = false;
      var dataObs = this._httpService.updateQuery(this.data[0].ANSWER, this.studentQueryId);
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
