import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "This is my title";
 // title = 'angular1';
  message ='Vintage Movies';

isDisabled:boolean = false;
onClick() {
console.log("button has clicked");
}
}


