import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
people:any[]=[];
imgPrefix:any="https://image.tmdb.org/t/p/w500/";
  constructor(private _MovieServiceService:MovieServiceService) { }

  ngOnInit(): void {
    this._MovieServiceService.getTrendingMovies('person').subscribe((data)=>{
      this.people = data.results
    })

}
}
