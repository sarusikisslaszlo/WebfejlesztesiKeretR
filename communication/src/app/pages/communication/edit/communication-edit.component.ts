import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-communication-edit',
  templateUrl: './communication-edit.component.html',
  styleUrls: ['./communication-edit.component.scss']
})
export class CommunicationEditComponent implements OnInit {

  toppingsCatgoriesControl =  new FormControl(this.data.communication.category, Validators.required);
  categoriesList: string[] = ['alert', 'notification', 'reminder', 'instruction'];
  statusList: string[] = ['preparation', 'in-progress', 'not-done', 'on-hold', 'stopped', 'completed', 'entered-in-error', 'unknown'];

  form: FormGroup = new FormGroup({
    status: new FormControl(this.data.communication.status, Validators.required),
    category: this.toppingsCatgoriesControl,
    priority: new FormControl(this.data.communication.priority, Validators.required),
    medium: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    topic: new FormControl('', Validators.required),
    sent: new FormControl(Validators.required),
    received: new FormControl(Validators.required),
    recipient: new FormControl('', Validators.required),
    sender: new FormControl('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<CommunicationEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onToppingRemoved(topping: string, toppingsControl: any) {
    const toppings = toppingsControl.value as string[];
    this.removeFirst(toppings, topping);
    toppingsControl.setValue(toppings);
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
