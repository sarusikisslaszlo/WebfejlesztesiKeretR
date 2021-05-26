import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Communication } from 'src/app/shared/models/communication.model';
import { CommunicationEditComponent } from '../edit/communication-edit.component';

@Component({
  selector: 'app-communication-card',
  templateUrl: './communication-card.component.html',
  styleUrls: ['./communication-card.component.scss']
})
export class CommunicationCardComponent implements OnInit {
  @Input() communication?: Communication;
  @Output() getCommunication = new EventEmitter<Communication>();

  constructor(private service: FbBaseService<Communication>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteObject(id: string): void {
    this.service.delete('communication', id);
  }

  openUpdateDialog(commParam: Communication): void {
    const dialogRef = this.dialog.open(CommunicationEditComponent, { data: { communication: commParam }});
    dialogRef.afterClosed().subscribe((communication: Communication) => {
      this.service.update('communication', commParam.id, communication);
    }, err => {
      console.warn(err);
    });
  }

}
