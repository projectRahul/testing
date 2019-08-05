import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { GraphComponent } from './graph/graph.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

const routes: Routes = [
	{path: 'learning/customdirective', component : CustomdirectiveComponent},
	{path: 'learning/graph', component : GraphComponent},
	{path: 'learning/chatroom', component : ChatroomComponent},
	{path: 'learning', redirectTo : 'learning', pathMatch: 'full'},
	// {path : '**',component : PageNotFoundComponent}

];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
