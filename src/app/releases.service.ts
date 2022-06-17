import { Injectable } from '@angular/core';
import { Seventies } from './movies/seventies';


@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  constructor() { }
  
  public getSeventiesMovies(){

    let seventies :Seventies[];

    seventies=[
      new Seventies("The Godfather",  "Marlon Brando, Al Pacino", "1972", "Francis Ford Coppola"),
      new Seventies("Jaws",  "Roy Scheider, Robert Shaw", "1975", "Steven Spielberg"),
      new Seventies("The Exorcist", "Linda Blair, Ellen Burstyn", "1973",  "William Friedkin")
    ]
    return seventies;
  }
}
