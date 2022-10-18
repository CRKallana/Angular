import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public name : string ="Kalpana";
  public password : string ="kalpu@1234"
  public pplArray:any=[];
  public status:string="";
  public Add(ctrl:any){
    this.pplArray.push({name:this.name,password:this.password,
      dp:'https://unsplash.it/45/45/?random'});
      var lastIndex = this.pplArray.length-1;
      var lastItem = this.pplArray[lastIndex];
      this.status = 'Used ${lastItem.name} added with password ${lastItem.password}!';
      ctrl.style="color:green; font-style:Italic; background-color:yellow;"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
