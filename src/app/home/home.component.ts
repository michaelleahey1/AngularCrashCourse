import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string ="Thank You";
  constructor() { }

  ngOnInit(): void {
  }
  toDate : Date = new Date();
 Thanks( newMessage: string){
 this.message = newMessage
 }
}
