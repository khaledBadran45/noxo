import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { ReisterComponent } from './reister/reister.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home' ,canActivate :[AuthGuard], component:HomeComponent},
  {path:'movies',canActivate :[AuthGuard], component:MoviesComponent},
  {path:'movieDetails/:id',canActivate :[AuthGuard], component:MovieDetailsComponent},
  {path:'tv',canActivate :[AuthGuard], component:TvComponent},
  {path:'tvDetails/:id',canActivate :[AuthGuard], component:TvDetailsComponent},
  {path:'people' ,canActivate :[AuthGuard], component:PeopleComponent},
  {path:'personDetails/:id',canActivate :[AuthGuard], component:PersonDetailsComponent},
  {path:'about',canActivate :[AuthGuard], component:AboutComponent},
  {path:'networks',canActivate :[AuthGuard],component:NetworksComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'reister', component:ReisterComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
