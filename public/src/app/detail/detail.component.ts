import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; // add
import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  thisMovie={"title":"","ratings":[{"name": "", "star":null, "review": ""}]};
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    // pass id from url
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      let observable = this._httpService.getAMovie(params['id']);
      observable.subscribe(data => {
        this.thisMovie = data['movie'];
        console.log(this.thisMovie);
      });
    });
  }

  deleteAMovie(id) {
      let observable = this._httpService.deleteAMovie(id);
      observable.subscribe(data => {
        console.log(this.thisMovie);
      });
    
  }


}
