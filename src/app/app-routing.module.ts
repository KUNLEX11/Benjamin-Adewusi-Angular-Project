import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchComponent } from './fetch/fetch.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { HttpComponent } from './http/http.component';
import { LoginComponent } from './components1/login/login.component';
import { ForgotPasswordComponent } from './components1/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components1/not-found/not-found.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'fetch', component: FetchComponent },
  {path: 'child', component: ChildComponent },
  {path: 'http', component: HttpComponent },
  {path: 'form', component: FormComponent },
  {path: 'footer', component: FooterComponent },
  {path:'login', component: LoginComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'not-found', component: NotFoundComponent},
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
