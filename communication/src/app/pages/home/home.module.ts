import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RegistrationModule } from '../registration/registration.module';
import { LoginModule } from '../login/login.module';
import { NavModule } from '../nav/nav.module';
import { ListModule } from '../list/list.module';
import { SplashScreenModule } from '../splash-screen/splash-screen.module';
import { NotificationCardModule } from '../notification/card/notification-card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, RegistrationModule, LoginModule, NavModule, ListModule, SplashScreenModule,
    NotificationCardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
