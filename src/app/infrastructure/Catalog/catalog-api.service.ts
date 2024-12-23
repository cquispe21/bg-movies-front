import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmApiResponse } from 'src/app/domain/catalog';
import { MovieDetails } from 'src/app/domain/catalogDetails';
import { ResponseApi } from 'src/app/domain/responseApi';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CatalogApiService {
  
  private httpclient: HttpClient;
  private url = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {
    this.httpclient = http;
  }

  getCatalog():Observable<ResponseApi<FilmApiResponse>> {
    return this.httpclient.get<ResponseApi<FilmApiResponse>>(`${this.url}film/catalog`);
  }
  getMovieDetails(id: string): Observable<ResponseApi<MovieDetails>> {
    return this.httpclient.get<ResponseApi<MovieDetails>>(`${this.url}film/movieSearch?idMovie=${id}`);
  }
}
