import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
id:string="";
personId:any={};
names:any[]=[]
imgPrefix:any="https://image.tmdb.org/t/p/w500/";
  constructor(private _MovieServiceService:MovieServiceService,private _ActivatedRoute:ActivatedRoute) { }







  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id
     this._MovieServiceService.getPersonDetails(this.id).subscribe((data)=>{
       this.personId = data
       console.log(this.personId)
       this.names = data.also_known_as
     })
  }

}
