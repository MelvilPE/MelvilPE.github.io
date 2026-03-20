import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { ConstantsService } from '../../../services/constants/constants.service';
import { CommonModule } from '@angular/common';
import { InputNumber } from '../../../components/input-number/input-number';
import { InputCheckbox } from '../../../components/input-checkbox/input-checkbox';
import { InputColor } from '../../../components/input-color/input-color';
import { InputText } from '../../../components/input-text/input-text';

@Component({
  selector: 'app-options-device',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputNumber, InputCheckbox, InputColor, InputText],
  templateUrl: './options-device.html',
  styleUrl: './options-device.scss',
})
export class OptionsDeviceComponent {
  @Input() optionsDevice: any;
  @Output() optionsDeviceChange = new EventEmitter<any>();

  public openSection: string | null = null;
  public openGroup: string | null = null;

  public init = false;
  public form!: FormGroup;

  private subsSink = new SubSink();

  constructor(private constantsService: ConstantsService) {}

  ngOnChanges() {
    this.init = false;
    this.subsSink.unsubscribe();
    this.createForm();
  }

  ngOnDestroy() {
    this.subsSink.unsubscribe();
  }

  private createForm() {
    this.form = new FormGroup({});

    const sectionNames = this.getSectionNames();

    sectionNames.forEach((sectionName) => {
      const groupNames = this.getGroupNames(sectionName);

      groupNames.forEach((groupName) => {
        const propertyNames = this.getPropertiesNames(sectionName, groupName);

        propertyNames.forEach((propertyName) => {
          const controlName = this.getFormControlName(sectionName, groupName, propertyName);
          const controlValue = this.getPropertyValue(sectionName, groupName, propertyName);

          const formControl = new FormControl(controlValue, Validators.required);
          this.form.addControl(controlName, formControl);

          this.subsSink.sink = formControl.valueChanges.subscribe((value) => {
            if (value !== null) {
              this.setPropertyValue(sectionName, groupName, propertyName, value);
              this.optionsDeviceChange.emit(this.optionsDevice);
            }
          });
        });
      });
    });

    this.init = true;
  }

  public getSectionNames() {
    return this.constantsService.getSectionNames(this.optionsDevice);
  }

  public getGroupNames(sectionName: string) {
    return this.constantsService.getGroupNames(this.optionsDevice, sectionName);
  }

  public getPropertiesNames(sectionName: string, groupName: string) {
    return this.constantsService.getPropertiesNames(this.optionsDevice, sectionName, groupName);
  }

  public getPropertyType(sectionName: string, groupName: string, propertyName: string) {
    return this.constantsService.getPropertyType(this.optionsDevice, sectionName, groupName, propertyName);
  }

  public getPropertyValue(sectionName: string, groupName: string, propertyName: string) {
    return this.constantsService.getPropertyValue(this.optionsDevice, sectionName, groupName, propertyName);
  }

  public getFormControlName(sectionName: string, groupName: string, propertyName: string): string {
    return this.constantsService.getFormControlName("optionsDevice", sectionName, groupName, propertyName);
  }

  public toggleSection(sectionName: string): void {
    this.openSection = this.openSection === sectionName ? null : sectionName;
    this.openGroup = null;
  }

  public toggleGroup(sectionName: string, groupName: string): void {
    const key = `${sectionName}/${groupName}`;
    this.openGroup = this.openGroup === key ? null : key;
  }

  private setPropertyValue(sectionName: string, groupName: string, propertyName: string, value: any) {
    return this.constantsService.setPropertyValue(this.optionsDevice, sectionName, groupName, propertyName, value);
  }
}
