import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationListComponent } from './communication-list.component';
import { CommunicationListRoutingModule } from './communication-list-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { CommunicationCardModule } from '../card/communication-card.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommunicationAddModule } from '../add/communication-add.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [CommunicationListComponent],
  imports: [
    CommonModule, CommunicationListRoutingModule, MatToolbarModule, ContainerModule, CommunicationCardModule, MatButtonModule, MatIconModule, CommunicationAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatListModule, MatTableModule,
    MatProgressSpinnerModule
  ],
  exports: [CommunicationListComponent]
})
export class CommunicationListModule { }
