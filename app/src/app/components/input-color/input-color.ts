import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-color',
  imports: [ReactiveFormsModule],
  templateUrl: './input-color.html',
  styleUrl: './input-color.scss',
})
export class InputColor {
  @Input() formGroup!: FormGroup;
  @Input() controlName: string = '';

  public getControl(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }
}
