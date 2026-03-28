import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputNumber } from '../input-number/input-number';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-input-color',
  imports: [ReactiveFormsModule, InputNumber],
  templateUrl: './input-color.html',
  styleUrl: './input-color.scss',
})
export class InputColor {
  @Input() formGroup!: FormGroup;
  @Input() controlName: string = '';

  public init = false;
  public colorForm!: FormGroup;

  private subsSink = new SubSink();

  public propertyNames = ["R", "G", "B", "A"];

  public colorPreview = "";

  ngOnChanges() {
    this.init = false;
    this.subsSink.unsubscribe();
    this.createForm();
  }

  ngOnDestroy() {
    this.subsSink.unsubscribe();
  }

  public getControl(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }

  public getPreviewColor(rgba: number[]): string {
    const [r, g, b] = rgba.map((channel) =>
      Math.round(channel * 255).toString(16).padStart(2, '0')
    );
    return `#${r}${g}${b}`;
  }

  private createForm() {
    this.colorForm = new FormGroup({});

    const formColor: number[] = this.getControl().value;

    this.propertyNames.forEach((propertyName, index) => {
      const controlValue = formColor[index];
      const formControl = new FormControl(controlValue, Validators.required);
      this.colorForm.addControl(propertyName, formControl);

      this.subsSink.sink = formControl.valueChanges.subscribe(() => {
        this.onChannelChange();
      });
    });

    this.refreshPreviewColor();
    this.init = true;
  }

  private onChannelChange() {
    const rgba = this.getRGBAFromForm();
    this.getControl().setValue(rgba, { emitEvent: true });
    this.refreshPreviewColor();
  }

  private getRGBAFromForm(): number[] {
    return this.propertyNames.map(
      (name) => this.colorForm.get(name)?.value ?? 0
    );
  }

  private refreshPreviewColor() {
    const rgba = this.getRGBAFromForm();
    this.colorPreview = this.getPreviewColor(rgba);
  }
}
