import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service'; //add 
import { HttpClientModule } from '@angular/common/http'; // add
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { ReviewComponent } from './review/review.component'; //add

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NewComponent,
    DetailComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // add
    FormsModule //add
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
