import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/application/catalog/catalog';
import { FilmApiResponse, Movies } from 'src/app/domain/catalog';
import { ResponseApi } from 'src/app/domain/responseApi';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'bg-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  catalog: Movies[] = [];
  constructor(private catalogService: CatalogService, private router: Router) {}
  ngOnInit(): void {
    this.getCatalog();
  }
  getCatalog() {
    this.catalogService.getCatalog().subscribe((response: ResponseApi<FilmApiResponse>) => {
      this.catalog = response.data.results;
    });
    
  }
  onMovieClick(movie: Movies) {
    
    this.router.navigate(['/movie/', movie.id]);
  }
}
