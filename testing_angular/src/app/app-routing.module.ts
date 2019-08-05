import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LearningComponent } from './learning/learning.component';
// import { PageNotFoundComponent } from './pnf/page-not-found.component';

const routes: Routes = [
	{path: 'login', component : LoginComponent},
	{path: 'home', component : HomeComponent},
	{path: 'learning', component : LearningComponent},
	{path: '', redirectTo : '/login', pathMatch: 'full'},	
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
