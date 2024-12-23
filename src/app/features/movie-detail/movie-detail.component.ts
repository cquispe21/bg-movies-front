import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from 'src/app/application/catalog/catalog';
import { Movies } from 'src/app/domain/catalog';
import { MovieDetails } from 'src/app/domain/catalogDetails';
import { ResponseApi } from 'src/app/domain/responseApi';

@Component({
  selector: 'bg-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie!: MovieDetails;
  genresList: string = '';
  productionCompanies: string = '';
  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService
  ) {}
  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.catalogService
        .getMovieDetails(movieId)
        .subscribe((response: ResponseApi<MovieDetails>) => {
          this.movie = response.data;
          this.productionCompanies = this.movie.production_companies
            .map((company: { name: string }) => company.name)
            .join(', ');
          if (this.movie.genres) {
            this.genresList = this.movie.genres
              .map((genre: any) => genre.name)
              .join(', ');
          }
        });
    }
  }
}
