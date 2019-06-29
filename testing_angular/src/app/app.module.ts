import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
import { BaseurlService } from './baseurl.service';
import { UserService } from './user.service';
import { NotifierModule } from 'angular-notifier';
import { PageNotFoundComponent } from './pnf/page-not-found.component';
// import { SharedComponent } from './home/shared/shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { NgxSpinnerModule } from 'ngx-spinner';

// import { MyInterceptor } from './my-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // HomeComponent,
    PageNotFoundComponent,
    // SharedComponent
  ],
  imports: [
    NgxSpinnerModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NotifierModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule
  ],
  providers: [UserService,CookieService/*,{provide: HTTP_INTERCEPTORS,useClass: MyInterceptor,multi: true}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
