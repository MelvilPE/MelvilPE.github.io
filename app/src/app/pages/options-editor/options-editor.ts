import { Component } from '@angular/core';
import { DevOptionsPage } from './dev-options-page/dev-options-page';

@Component({
  selector: 'app-options-editor',
  imports: [DevOptionsPage],
  templateUrl: './options-editor.html',
  styleUrl: './options-editor.scss',
})
export class OptionsEditor {}
