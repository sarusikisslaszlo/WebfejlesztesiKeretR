import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CATEGORIES } from 'src/app/shared/database/category.database';
import { CommunicationAddComponent } from '../communication/add/communication-add.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  categories = CATEGORIES;
  communications: any = [];
  category?= '';
  page = '';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.category = '';
  }

  ngOnDestroy(): void {
    delete this.category;
  }

  onSelect(event: string): void {
    this.category = event;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CommunicationAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title) {
        this.communications.push(result);
      }
    });
  }

}
