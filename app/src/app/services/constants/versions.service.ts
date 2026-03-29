import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VersionsService {
  constructor(private http: HttpClient) {}

  public getVersionsList() {
    return this.http.get<any>(
      `${environment.apiUrl}/list-game-clients/`
    );
  }
}
