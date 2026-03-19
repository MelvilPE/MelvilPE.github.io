import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-checkbox',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './input-checkbox.html',
  styleUrl: './input-checkbox.scss',
})
export class InputCheckbox {
  @Input() formGroup!: FormGroup;
  @Input() controlName: string = '';

  public getControl(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }
}
