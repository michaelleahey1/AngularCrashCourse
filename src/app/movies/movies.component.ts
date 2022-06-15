import { AstMemoryEfficientTransformer } from '@angular/compiler';
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
  {title: 'Casablanca', Cast: 'Humphrey Bogart, Ingred Begman', Release_Date: 1942, Director: 'Michael Curtiz',display:false },
  {title: 'The Man Who Knew Too Much', Cast: 'James Stewart, Doris Day', Release_Date: 1956, Director: 'Alfred Hitchcock',display:false},
  {title: 'Frankenstein', Cast: 'Colin Clive, Boris Karlov', Release_Date: 1931, Director: 'James Whale',display:false},
  {title: 'Psycho', Cast: 'Anthony Perkins, Janet Leigh', Release_Date: 1960, Director: 'Alfred Hitchcock',display:false},
  {title: 'All Quiet on the Western Front', Cast: 'Lew Ayres, Loius Wolheim', Release_Date: 1930, Director: 'Lewis Milestone',display:false},
  {title: 'To Kill a Mockingbird', Cast: 'Gregory Peck, Mary Badham', Release_Date: 1962, Director: 'Robert Mulligan',display:false},
  {title: "Twelve O'Clock High", Cast: 'Gregory Peck, Hugh Marlowe', Release_Date: 1949, Director: 'Henry King',display:false},
  {title:'The Day The Earth Stood Still', Cast: 'Michael Rennie, Patricia Neal', Release_Date: 1951, Director: 'Robert Wise',display:false}
]
  displayMovie(movieNumber:number){
    for (let i = 0; i < movie.length; i++){
      this.movie[i].display= false;
    }
      this.movie[movieNumber].display = true
  }
}
class movie{
  title: string | undefined;
  Cast:string | undefined;
  Release_Date: number | undefined;
  Director:string | undefined;
  display:boolean | undefined;
}