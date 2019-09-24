import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningRoutingModule } from './learning-routing.module';
import { ChartModule } from 'angular-highcharts';
import { EditorModule } from '@tinymce/tinymce-angular';
import { QRCodeModule } from 'angularx-qrcode';
import { RecaptchaModule } from 'ng-recaptcha';

import { LearningService } from './learning.service';

import { LearningComponent } from './learning.component';

import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { SharedlearningComponent } from './sharedlearning/sharedlearning.component';
import { NotifierModule } from 'angular-notifier';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckpasswordDirective } from './customdirective/checkpassword.directive';
import { GraphComponent } from './graph/graph.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MailMceEditorComponent } from './mail-mce-editor/mail-mce-editor.component';
import { QrComponent } from './qr/qr.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { SmsComponent } from './sms/sms.component';
import { OnesignalComponent } from './onesignal/onesignal.component';
import { GmapComponent } from './gmap/gmap.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { SimpleComponent } from './lifecyclehook/simple.component';
import { CustomPromiseObservableComponent } from './custom-promise-observable/custom-promise-observable.component';


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
  	MailMceEditorComponent,
  	QrComponent,
  	CaptchaComponent,
  	SmsComponent,
  	OnesignalComponent,
  	GmapComponent,
  	CustomobservableComponent,
  	LifecyclehookComponent,SimpleComponent, CustomPromiseObservableComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    NotifierModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    SocketIoModule.forRoot(config),
    EditorModule,
    QRCodeModule,
    RecaptchaModule.forRoot()
  ],
  providers: [LearningService],
})
export class LearningModule { }
