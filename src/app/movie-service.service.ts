import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {


constructor(private _HttpClient:HttpClient){}

  getTrendingMovies(apiType:string):Observable<any>
 {
     return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${apiType}/week?api_key=fde27b231431ce1338679c3d7c91fd47`)
  }
  

  getMovieDetails(id:any):Observable<any>
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fde27b231431ce1338679c3d7c91fd47`)
  }

  getTvDetails(id:any):Observable<any>
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=fde27b231431ce1338679c3d7c91fd47`)
  }


  getPersonDetails(id:any):Observable<any>
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=fde27b231431ce1338679c3d7c91fd47&language=en-US`)
  }
}