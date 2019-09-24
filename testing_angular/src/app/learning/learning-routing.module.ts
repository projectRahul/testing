import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CustomdirectiveComponent } from './customdirective/customdirective.component';
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
import { CustomPromiseObservableComponent } from './custom-promise-observable/custom-promise-observable.component';

const routes: Routes = [
	{
		path : 'learning' , children : [
			{path: 'customdirective', component : CustomdirectiveComponent},
			{path: 'graph', component : GraphComponent},
			{path: 'chatroom', component : ChatroomComponent},
			{path: 'mail', component : MailMceEditorComponent},
			{path: 'qr', component : QrComponent},
			{path: 'captcha', component : CaptchaComponent},
			{path: 'sms', component : SmsComponent},
			{path: 'onesignal', component : OnesignalComponent},
			{path: 'googlemap', component : GmapComponent},
			{path: 'customobservable', component : CustomobservableComponent},
			{path: 'custompromiseobservable', component : CustomPromiseObservableComponent},
			{path: 'lifecyclehook', component : LifecyclehookComponent},
			{path: '', redirectTo : 'learning', pathMatch: 'full'},
		]
	}
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
