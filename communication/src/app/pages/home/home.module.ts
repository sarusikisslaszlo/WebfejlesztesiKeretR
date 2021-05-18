import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RegistrationModule } from '../registration/registration.module';
import { LoginModule } from '../login/login.module';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, RegistrationModule, LoginModule, NavModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
