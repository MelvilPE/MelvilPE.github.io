import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Documentation } from './pages/documentation/documentation';
import { OptionsEditor } from './pages/options-editor/options-editor';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'documentation',
    component: Documentation,
  },
  {
    path: 'options-editor',
    component: OptionsEditor,
  }
];
