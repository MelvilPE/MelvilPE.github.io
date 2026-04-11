import { ChangeDetectorRef, Component } from '@angular/core';
import { VersionsService } from '../../services/constants/versions.service';
import { CommonModule, DatePipe } from '@angular/common';
import { SubSink } from 'subsink';
import { GameClient } from '../../interfaces/game-client.interface';

type SortDirection = 'asc' | 'desc';
type SortColumn = 'version' | 'source' | 'platform' | 'type_client' | 'upload_date' | 'upload_server_date';

@Component({
  selector: 'app-versions',
  imports: [CommonModule, DatePipe],
  templateUrl: './versions.html',
  styleUrl: './versions.scss',
})
export class Versions {
  public versions: GameClient[] = [];
  public sortedVersions: GameClient[] = [];

  public isLoading = true;
  public hasFailed = false;

  public sortColumn: SortColumn = 'upload_date';
  public sortDirection: SortDirection = 'desc';

  private subsSink = new SubSink();

  constructor(
    private versionsService: VersionsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subsSink.sink = this.versionsService.getVersionsList().subscribe({
      next: (data) => {
        this.versions = data;
        this.applySorting();
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

  sortBy(column: SortColumn): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applySorting();
    this.cdr.detectChanges();
  }

  private applySorting(): void {
    this.sortedVersions = [...this.versions].sort((a, b) => {
      const rawA = a[this.sortColumn];
      const rawB = b[this.sortColumn];

      if (rawA == null && rawB == null) return 0;
      if (rawA == null) return 1;
      if (rawB == null) return -1;

      let valA: number | string;
      let valB: number | string;

      if (this.isDateColumn(this.sortColumn)) {
        valA = new Date(rawA).getTime();
        valB = new Date(rawB as string).getTime();
      } else {
        valA = (rawA as string).toLowerCase();
        valB = (rawB as string).toLowerCase();
      }

      const comparison = valA < valB ? -1 : valA > valB ? 1 : 0;
      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
  }

  private isDateColumn(col: SortColumn): boolean {
    return col === 'upload_date' || col === 'upload_server_date';
  }
}
