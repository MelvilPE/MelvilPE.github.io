import { ChangeDetectorRef, Component } from '@angular/core';
import { VersionsService } from '../../services/constants/versions.service';
import { CommonModule, DatePipe } from '@angular/common';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-versions',
  imports: [CommonModule, DatePipe],
  templateUrl: './versions.html',
  styleUrl: './versions.scss',
})
export class Versions {
  public versions: any[] = [];

  public isLoading = true;
  public hasFailed = false;

  private subsSink = new SubSink();

  constructor(
    private versionsService: VersionsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subsSink.sink = this.versionsService.getVersionsList().subscribe({
      next: (data) => {
        this.versions = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.hasFailed = true;
        console.error('API error:', err);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }

  ngOnDestroy() {
    this.subsSink.unsubscribe();
  }
}
