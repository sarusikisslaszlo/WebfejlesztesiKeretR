import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from '../nav/nav.module';
import { HomeRoutingModule } from './home-routing.module';
import { NotificationModule } from '../notification/notification.module';
import { AlertModule } from '../alert/alert.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule, CommonModule, NavModule, NotificationModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
