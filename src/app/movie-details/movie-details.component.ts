import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id:string='';
  movieId:any={};
  movieTypes:any[]=[];
  imgPrefix:any="https://image.tmdb.org/t/p/w500/";
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MovieServiceService:MovieServiceService) { 
  }
  
  ngOnInit(): void {
    this.id =this._ActivatedRoute.snapshot.params.id
    this._MovieServiceService.getMovieDetails(this.id).subscribe((data)=>{
       this.movieId = data
       this.movieTypes = data.genres
    })
    
  }
  


}



// this.id = this._ActivatedRoute.snapshot.params.id
