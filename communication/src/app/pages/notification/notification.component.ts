import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Communication } from 'src/app/shared/models/communication.model';
import { CommunicationAddComponent } from '../communication/add/communication-add.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  title = 'Értesítések';
  list$: Observable<Communication[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<Communication>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getNotification();
  }

  getNotification(): void {
    this.errorObject = null;
    this.list$ = this.service.getNotification('communication').pipe(
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
