import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tvs:any[]=[]
  imgPrefix:any="https://image.tmdb.org/t/p/w500/";
  constructor(private _MovieServiceService:MovieServiceService) { }

  ngOnInit(): void {
    this._MovieServiceService.getTrendingMovies('tv').subscribe((data)=>{
     this.tvs = data.results


    })
  }

}
