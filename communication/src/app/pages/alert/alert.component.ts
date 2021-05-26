import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Communication } from 'src/app/shared/models/communication.model';
import { CommunicationAddComponent } from '../communication/add/communication-add.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  title = 'Figyelmeztetés';
  list$: Observable<Communication[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<Communication>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAlert();
  }

  getAlert(): void {
    this.errorObject = null;
    this.list$ = this.service.getAlert('communication').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
    console.log(this.list$);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CommunicationAddComponent, {});
    dialogRef.afterClosed().subscribe((communication: Communication) => {
      if (communication?.status) {
        this.service.add('communication', communication);
      }
    }, err => {
      console.warn(err);
    });
  }
}
