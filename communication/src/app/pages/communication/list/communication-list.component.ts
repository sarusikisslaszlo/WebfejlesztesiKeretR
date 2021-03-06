import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Communication } from 'src/app/shared/models/communication.model';
import { CommunicationAddComponent } from '../add/communication-add.component';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-communication-list',
  templateUrl: './communication-list.component.html',
  styleUrls: ['./communication-list.component.scss']
})
export class CommunicationListComponent implements OnInit {
  title = 'Kommunikációk';
  list$: Observable<Communication[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<Communication>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked:::::app component');
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('communication').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  getNotification(): void {
    this.errorObject = null;
    this.list$ = this.service.getNotification('communication').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
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

