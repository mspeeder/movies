import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ MoviesComponent } from './movies/movies.component';
import{ NewComponent  } from './new/new.component';
import{ DetailComponent } from './detail/detail.component';
import{ ReviewComponent } from './review/review.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  {path: 'movies', component: MoviesComponent },
  {path: 'movies/new', component: NewComponent },
  { path: 'movies/:id', component: DetailComponent},
  { path: 'movies/:id/review', component: ReviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
