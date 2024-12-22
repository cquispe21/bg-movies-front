import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmApiResponse } from 'src/app/domain/catalog';
import { CatalogApiService } from 'src/app/infrastructure/Catalog/catalog-api.service';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private catalogApi: CatalogApiService;
  constructor(catalogApi: CatalogApiService) {
    this.catalogApi = catalogApi;
  }

  getCatalog(): Observable<FilmApiResponse> {
    return this.catalogApi.getCatalog();
  }
}
