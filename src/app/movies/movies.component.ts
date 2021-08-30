import { Component, Input, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
movies:any[]=[]
imgPrefix:any="https://image.tmdb.org/t/p/w500/";

  constructor(private _MovieServiceService:MovieServiceService) { }

  ngOnInit(): void {
    this._MovieServiceService.getTrendingMovies('movies').subscribe((data)=>{
      this.movies = data.results
    })
  }


}
