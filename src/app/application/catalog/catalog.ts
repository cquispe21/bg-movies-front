import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmApiResponse, Movies } from 'src/app/domain/catalog';
import { MovieDetails } from 'src/app/domain/catalogDetails';
import { ResponseApi } from 'src/app/domain/responseApi';
import { CatalogApiService } from 'src/app/infrastructure/Catalog/catalog-api.service';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private catalogApi: CatalogApiService;
  constructor(catalogApi: CatalogApiService) {
    this.catalogApi = catalogApi;
  }

  getCatalog(): Observable<ResponseApi<FilmApiResponse>> {
    return this.catalogApi.getCatalog();
  }
  getMovieDetails(id: string): Observable<ResponseApi<MovieDetails>> {
   return this.catalogApi.getMovieDetails(id);
  }
}
