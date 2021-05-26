import { OnHoverModule } from './../../shared/directives/on-hover/on-hover.module';
import { ContainerModule } from './../../shared/components/container/container.module';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { SplashScreenComponent } from './splash-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';



@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule, MatCardModule, MatRippleModule, OnHoverModule, ContainerModule, SplashScreenRoutingModule
  ],
  exports: [SplashScreenComponent]
})
export class SplashScreenModule { }
