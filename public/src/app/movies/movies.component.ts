import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getMoviesF();
  }

  getMoviesF() {
    let tempObservable = this._httpService.getMovies();
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => {
      console.log("Got our movies!", data);
      this.movies = data['movies'];
      console.log(this.movies);
    });
  }

}
