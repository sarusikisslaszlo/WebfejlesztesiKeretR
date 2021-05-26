import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RegistrationRoutingModule, MatCardModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatChipsModule
  ],
  exports: [RegistrationComponent]
})
export class RegistrationModule { }
