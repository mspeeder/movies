import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; 
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  updateMovie={"title":"","ratings":[{"name": "", "star":null, "review": ""}]};
  rating = {"name": "", "star":null, "review": ""};
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      let observable = this._httpService.getAMovie(params['id']);
      observable.subscribe(data => {
        this.updateMovie = data['movie'];
        console.log(this.updateMovie);

      });
    });
  }

  
  createAReview(id) {
    let observable = this._httpService.addComment(id,this.rating);
    observable.subscribe(data => {
      //this.getTasksFromService();
      //this.cakes.push(data['cake']);
      console.log("Got data from post back", this.rating);
      this.rating = {"name": "", "star":null, "review": ""};
      this._router.navigate(['/movies']);

    })

    
  }

}
