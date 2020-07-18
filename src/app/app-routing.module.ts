import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { QuestionsPageComponent } from 'src/questions-page/questions-page.component';
import { LoginComponent } from '../login/login.component';
import { addQuestionComponent } from '../addQuestion/addQuestion.component';
import { updateQueryComponent } from '../updateQuery/updateQuery.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'updateQuery', component: updateQueryComponent},
  { path: 'addQuestion', component: addQuestionComponent},
  { path: 'home', component: HomeComponent },
  { path: 'questionsPage', component: QuestionsPageComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
