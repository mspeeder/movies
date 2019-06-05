import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newMovie={"title":"","ratings":[{"name": "", "star":null, "review": ""}]}
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  createAMovie() {
    let observable = this._httpService.addMovie(this.newMovie);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newMovie = {"title":"","ratings":[{"name": "", "star":null, "review": ""}]};
      // redirect
      this._router.navigate(['/movies']);
    })

  }

}
