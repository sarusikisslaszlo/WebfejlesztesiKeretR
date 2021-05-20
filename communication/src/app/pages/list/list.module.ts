import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { ListComponent } from './list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule, MatListModule, MatTableModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
