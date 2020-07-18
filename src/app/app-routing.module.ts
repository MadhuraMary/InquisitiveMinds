import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { QuestionsPageComponent } from 'src/questions-page/questions-page.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'questionsPage', component: QuestionsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
