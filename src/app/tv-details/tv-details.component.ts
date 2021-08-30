import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {
  id:string="";
  tvId:any={};
  tvType:any[]=[];
  imgPrefix:any="https://image.tmdb.org/t/p/w500/";
  constructor(private _ActivatedRoute:ActivatedRoute , private _MovieServiceService:MovieServiceService) {
   }

  ngOnInit(): void {
  this.id = this._ActivatedRoute.snapshot.params.id;

  this._MovieServiceService.getTvDetails(this.id).subscribe((data)=>{
    this.tvId = data;
    this.tvType = data.genres
  })


}
}
