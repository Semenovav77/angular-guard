import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from "src/app/form/form.component";
import {LoginComponent} from "src/app/login/login.component";
import {NotFoundComponent} from "src/app/not-found/not-found.component";
import {AuthguardGuard} from "src/app/authguard.guard";

const routes: Routes = [
  { path: '', redirectTo: '/translate', pathMatch: 'full' },
  {path: 'translate', canActivate:[AuthguardGuard], component: FormComponent},
  {path: 'signin', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [FormComponent, LoginComponent, NotFoundComponent]
