import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningRoutingModule } from './learning-routing.module';
import { ChartModule } from 'angular-highcharts';

import { LearningService } from './learning.service';


import { LearningComponent } from './learning.component';


import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { SharedlearningComponent } from './sharedlearning/sharedlearning.component';
import { NotifierModule } from 'angular-notifier';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckpasswordDirective } from './customdirective/checkpassword.directive';
import { GraphComponent } from './graph/graph.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3300', options: {} };
 


@NgModule({
  declarations: [
  	LearningComponent,
  	CustomdirectiveComponent,
  	SharedlearningComponent,
  	CheckpasswordDirective,
  	GraphComponent,
  	ChatroomComponent,
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    NotifierModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [LearningService],
})
export class LearningModule { }
