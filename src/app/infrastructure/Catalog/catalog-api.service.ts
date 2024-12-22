import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmApiResponse } from 'src/app/domain/catalog';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CatalogApiService {
  
  private httpclient: HttpClient;
  private url = `${environment.apiUrl}/films`;
  constructor(private http: HttpClient) {
    this.httpclient = http;
  }

  getCatalog():Observable<FilmApiResponse> {
    return this.httpclient.get<FilmApiResponse>(this.url);
  }
}
