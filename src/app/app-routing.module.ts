import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { addQuestionComponent } from '../addQuestion/addQuestion.component';
import { updateQueryComponent } from '../updateQuery/updateQuery.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'updateQuery', component: updateQueryComponent},
  {path: 'addQuestion', component: addQuestionComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
