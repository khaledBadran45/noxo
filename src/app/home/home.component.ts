// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies:any[]=[];
  trendingTv:any[]=[];
  trendingPerson:any[]=[];
  imgPrefix:any="https://image.tmdb.org/t/p/w500/";
 
  constructor(private _MovieServiceService:MovieServiceService) { }
  ngOnInit(): void 
  {
    this._MovieServiceService.getTrendingMovies('movie').subscribe((response)=>{
    this.trendingMovies =  response.results.slice(10)
    })

    
    this._MovieServiceService.getTrendingMovies('tv').subscribe((response)=>{
      this.trendingTv =  response.results.slice(10)
      })
      
    this._MovieServiceService.getTrendingMovies('person').subscribe((response)=>{
      this.trendingPerson =  response.results.slice(10)
      })


  }




}
