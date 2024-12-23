import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from '../features/movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { CatalogComponent } from '../features/catalog/catalog.component';

const routes: Routes = [
    { path: 'movie/:id', component: MovieDetailComponent },
    { path: '', component: CatalogComponent }, 
    { path: '**', redirectTo: '', pathMatch: 'full' }, 
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
