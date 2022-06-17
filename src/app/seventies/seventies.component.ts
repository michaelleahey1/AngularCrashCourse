import { Component, OnInit } from '@angular/core';
import { Seventies } from '../movies/seventies';
import { ReleasesService } from '../releases.service';

@Component({
  selector: 'app-seventies',
  templateUrl: './seventies.component.html',
  styleUrls: ['./seventies.component.css'],
  providers:[ReleasesService]
})
export class SeventiesComponent implements OnInit {
  releases:Seventies[] | undefined;
  
  constructor(private releaseService:ReleasesService) {  }

  ngOnInit(): void {
  }
  getSeventies(){
    this.releases= this.releaseService.getSeventiesMovies();
  }

}
