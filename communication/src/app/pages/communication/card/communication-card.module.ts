import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationCardComponent } from './communication-card.component';

@NgModule({
  declarations: [CommunicationCardComponent],
  imports: [
    CommonModule
  ],
  exports: [CommunicationCardComponent]
})
export class CommunicationCardModule { }
