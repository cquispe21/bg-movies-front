import { Component } from '@angular/core';
import { CatalogService } from 'src/app/application/catalog/catalog';
import { FilmApiResponse, Movies } from 'src/app/domain/catalog';

@Component({
  selector: 'bg-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  catalog:Movies[] = [];
  constructor(private catalogService: CatalogService) {}
  ngOnInit(): void {
    this.getCatalog();
  }
  getCatalog(){
    this.catalogService.getCatalog().subscribe((response: FilmApiResponse) => {
      this.catalog = response.results;
    })
  }
}
