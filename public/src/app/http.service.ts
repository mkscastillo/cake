import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  createCake(cake){
    return this._http.post('/new',{cake:cake});
  }
  
  getCakes(){
    return this._http.get('/cakes');
  }

  getCake(id){
    return this._http.get('/cake/'+id.id);
  }
  
  createRating(data){
    return this._http.put('/rating/'+data.id,{rating:data});
  }
}

