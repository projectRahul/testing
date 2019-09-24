import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LearningModule } from './learning/learning.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BaseurlService } from './baseurl.service';
import { UserService } from './user.service';
import { NotifierModule } from 'angular-notifier';
import { PageNotFoundComponent } from './pnf/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { NgxSpinnerModule } from 'ngx-spinner';
import * as $ from 'jquery';

// import { MyInterceptor } from './my-interceptor';

import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider/*,FacebookLoginProvider*/} from "angular-6-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("clientkey.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    NgxSpinnerModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NotifierModule,
    FormsModule,
    ReactiveFormsModule,
    LearningModule,
    HomeModule,
    SocialLoginModule,
  ],
  providers: [ {provide: AuthServiceConfig,useFactory: getAuthServiceConfigs},UserService,CookieService/*,{provide: HTTP_INTERCEPTORS,useClass: MyInterceptor,multi: true}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
