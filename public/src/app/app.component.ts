import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newCake: any;
  cake: any;
  cakes: any;
  newRating: any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newCake = {baker: "", photo: ""};
    this.cake = {baker: "", photo: ""};
    this.newRating = {rating: 0, comment: ""};
    this.getCakes();
  }

  createCake(){
    let obs = this._httpService.createCake(this.newCake);
    obs.subscribe(data => {
      this.newCake = {baker: "", photo: ""};
      this.getCakes();
    })
  }

  getCake(id: String){
    let obs = this._httpService.getCake({id:id});
    obs.subscribe(data => {
      this.cake = data['cake'];
    })
  }

  getCakes(){
    let obs = this._httpService.getCakes();
    obs.subscribe(data => {
      this.cakes = data['cakes'];
    })
  }

  createRating(id: String){
    let obs = this._httpService.createRating({id:id,rating:this.newRating});
    obs.subscribe(data => {
      console.log(data);
      this.newRating = {rating: 0, comment: ""};
      this.getCakes();
    })
  }
}
