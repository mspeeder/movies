import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  addMovie(data){
    console.log(data,"this is at service");
    return this._http.post('/movie', data)
  };

  getMovies() {
    return this._http.get('/movies')
  };

  getAMovie(id) {
    return this._http.get(`/movie/${id}`)

  };

  addComment(id,data) {
    console.log(data, "what is in data?")
    return this._http.post(`/addComment/${id}`,data);
  };

  deleteAMovie(id) {
    return this._http.delete(`/movie/${id}`);
  }
  
}
