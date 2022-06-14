import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
movie: movie[]=[
  {title: 'Casablanca', Cast: 'Humphrey Bogart, Ingred Begman', Release_Date: 1942, Director: 'Michael Curtiz'},
  {title: 'The Man Who Knew Too Much', Cast: 'James Stewart, Doris Day', Release_Date: 1956, Director: 'Alfred Hitchcock'},
  {title: 'Frankenstein', Cast: 'Colin Clive, Boris Karlov', Release_Date: 1931, Director: 'James Whale'},
  {title: 'Psycho', Cast: 'Anthony Perkins, Janet Leigh', Release_Date: 1960, Director: 'Alfred Hitchcock'}
]
}
class movie{
  title: string | undefined;
  Cast:string | undefined;
  Release_Date: number | undefined;
  Director:string | undefined;
}