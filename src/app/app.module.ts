import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from 'src/home/home.component';
import { InstructionsComponent } from 'src/instructions/instructions.component';
import { QuestionsPageComponent } from 'src/questions-page/questions-page.component';
import { addQuestionComponent } from '../addQuestion/addQuestion.component';
import { updateQueryComponent } from '../updateQuery/updateQuery.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InstructionsComponent,
    QuestionsPageComponent,
    addQuestionComponent,
    updateQueryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
