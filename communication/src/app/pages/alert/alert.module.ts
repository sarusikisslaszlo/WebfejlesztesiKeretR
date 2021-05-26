import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationAddModule } from '../communication/add/communication-add.module';
import { CommunicationCardModule } from '../communication/card/communication-card.module';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { AlertComponent } from './alert.component';
import { AlertRoutingModule } from './alert-routing.module';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule, AlertRoutingModule, MatToolbarModule, ContainerModule, CommunicationCardModule, MatButtonModule, MatIconModule, CommunicationAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatListModule, MatTableModule,
    MatProgressSpinnerModule
  ],
  exports: [AlertComponent]
})
export class AlertModule { }
