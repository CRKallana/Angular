import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  public pagename:string="welcome page";
  public greetMsg:string="welcome to our exotic destination of angular app";

  constructor() { }

  ngOnInit(): void {
  }

}
