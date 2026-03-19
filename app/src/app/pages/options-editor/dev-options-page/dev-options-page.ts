import { ConstantsService } from './../../../services/constants/constants.service';
import { Component } from '@angular/core';
import { DevOptionsContent } from './dev-options-content/dev-options-content';
import yaml from 'js-yaml';

@Component({
  selector: 'app-dev-options-page',
  imports: [DevOptionsContent],
  templateUrl: './dev-options-page.html',
  styleUrl: './dev-options-page.scss',
})
export class DevOptionsPage {
  public devOptions: any;

  constructor(private constantsService: ConstantsService) {
    this.devOptions = constantsService.getDefaultDevOptions();
  }

  public onDevOptionsChange(event: Event) {
    this.devOptions = event;
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
        this.devOptions = yaml.load(content);
        console.log(this.devOptions)
      };
      reader.readAsText(file);
    };

    input.click();
  }

  public onSaveClicked() {
    const stringYaml = yaml.dump(this.devOptions);

    const blob = new Blob([stringYaml], { type: 'application/x-yaml' });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'optionsGlobal.yaml';
    anchor.click();

    URL.revokeObjectURL(url);
  }
}
