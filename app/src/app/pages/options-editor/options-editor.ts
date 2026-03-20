import { Component } from '@angular/core';
import { OptionsGlobalComponent } from './options-global/options-global';
import { OptionsDeviceComponent } from './options-device/options-device';
import { ConstantsService } from './../../services/constants/constants.service';
import yaml from 'js-yaml';

@Component({
  selector: 'app-options-editor',
  imports: [OptionsGlobalComponent, OptionsDeviceComponent],
  templateUrl: './options-editor.html',
  styleUrl: './options-editor.scss',
})
export class OptionsEditor {
  public activeTab: 'optionsGlobal' | 'optionsDevice' = "optionsGlobal"

  public optionsGlobal: any;
  public optionsDevice: any;

  constructor(private constantsService: ConstantsService) {
    this.optionsGlobal = constantsService.getDefaultOptionsGlobal();
    this.optionsDevice = constantsService.getDefaultOptionsDevice();
  }

  public onOptionsGlobalChange(event: Event) {
    this.optionsGlobal = event;
  }

  public onOptionsDeviceChange(event: Event) {
    this.optionsDevice = event;
  }

  public onLoadClicked() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.yaml,.yml';

    input.onchange = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result as string;
        if (this.activeTab === 'optionsGlobal') {
          this.optionsGlobal = yaml.load(content);
        } else {
          this.optionsDevice = yaml.load(content);
        }
      };
      reader.readAsText(file);
    };

    input.click();
  }

  public onSaveClicked() {
    let stringYaml = '';
    if (this.activeTab === 'optionsGlobal') {
      stringYaml = yaml.dump(this.optionsGlobal);
    } else {
      stringYaml = yaml.dump(this.optionsDevice);
    }

    const blob = new Blob([stringYaml], { type: 'application/x-yaml' });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = url;
    if (this.activeTab === 'optionsGlobal') {
      anchor.download = 'optionsGlobal.yaml';
    } else {
      anchor.download = 'optionsDevice.yaml';
    }

    anchor.click();

    URL.revokeObjectURL(url);
  }
}
