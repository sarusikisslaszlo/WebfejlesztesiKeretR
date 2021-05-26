import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationCardComponent } from './communication-card.component';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { CommunicationEditModule } from '../edit/communication-edit.module';

@NgModule({
  declarations: [CommunicationCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, CommunicationEditModule
  ],
  exports: [CommunicationCardComponent]
})
export class CommunicationCardModule { }
