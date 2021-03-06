import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationAddComponent } from './communication-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [CommunicationAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [CommunicationAddComponent],
  providers: [  
    MatDatepickerModule,  
  ],
})
export class CommunicationAddModule { }
