import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-communication-add',
  templateUrl: './communication-add.component.html',
  styleUrls: ['./communication-add.component.scss']
})
export class CommunicationAddComponent implements OnInit {
  toppingsCatgoriesControl =  new FormControl([], Validators.required);
  categoriesList: string[] = ['alert', 'notification', 'reminder', 'instruction'];
  statusList: string[] = ['preparation', 'in-progress', 'not-done', 'on-hold', 'stopped', 'completed', 'entered-in-error', 'unknown'];

  form: FormGroup = new FormGroup({
    status: new FormControl('', Validators.required),
    category: this.toppingsCatgoriesControl,
    priority: new FormControl(1, Validators.required),
    medium: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    topic: new FormControl('', Validators.required),
    sent: new FormControl(Validators.required),
    received: new FormControl(Validators.required),
    recipient: new FormControl('', Validators.required),
    sender: new FormControl('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<CommunicationAddComponent>) { }

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
