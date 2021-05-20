import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationCardComponent } from './notification-card.component';

@NgModule({
  declarations: [NotificationCardComponent],
  imports: [
    CommonModule
  ],
  exports: [NotificationCardComponent]
})
export class NotificationCardModule { }
