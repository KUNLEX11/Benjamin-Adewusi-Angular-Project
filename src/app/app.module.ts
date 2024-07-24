import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FooterComponent } from './footer/footer.component';
import { HttpComponent } from './http/http.component';
import { FetchComponent } from './fetch/fetch.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule}  from '@angular/common/http';
import { FetchService } from './fetch/fetch.service';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './components1/login/login.component';
import { ForgotPasswordComponent } from './components1/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components1/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from './components1/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    FooterComponent,
    HttpComponent,
    FetchComponent,
    HomeComponent,
    NavComponent,
    FormComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [FetchService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
