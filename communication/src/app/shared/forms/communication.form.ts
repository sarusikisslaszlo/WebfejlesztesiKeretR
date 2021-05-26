import { FormControl, FormGroup, Validators } from "@angular/forms";

export function getCommunicationForm(): FormGroup {
    return new FormGroup({
        status: new FormControl(Validators.required),
        category: new FormControl(Validators.required),
        priority: new FormControl(Validators.required),
        medium: new FormControl(Validators.required),
        subject: new FormControl(Validators.required),
        topic: new FormControl(Validators.required),
        sent: new FormControl(Validators.required),
        received: new FormControl(Validators.required),
        recipient: new FormControl(Validators.required),
        sender: new FormControl(Validators.required),
    });
}