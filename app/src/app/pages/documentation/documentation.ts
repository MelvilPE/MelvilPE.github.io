import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  imports: [],
  templateUrl: './documentation.html',
  styleUrl: './documentation.scss',
})
export class Documentation {
  public isSidebarOpen = false;

  /*
   * This method is useful as # HREF is already used by router
   */
  scrollTo(sectionId: string) {
    this.isSidebarOpen = false;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
