import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  imports: [ReactiveFormsModule],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
})
export class InputText {
  @Input() formGroup!: FormGroup;
  @Input() controlName: string = '';

  public getControl(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }
}
