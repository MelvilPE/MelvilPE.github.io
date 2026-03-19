import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  imports: [ReactiveFormsModule],
  templateUrl: './input-number.html',
  styleUrl: './input-number.scss',
})
export class InputNumber {
  @Input() formGroup!: FormGroup;
  @Input() controlName: string = '';

  public getControl(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }
}
