import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  public name : string ="kalpana";
  public role : string="Admin";
  public pplArray:any =[];
  public status:string="";

  public Add(ctrl:any){
    this.pplArray.push({name:this.name,role:this.role,
    dp:'https://unsplash.it/45/45/?random'});
    var lastIndex = this.pplArray.length-1;
    var lastItem = this.pplArray[lastIndex];
    this.status = 'Used ${lastItem.name} added with role ${lastItem.role}!';
    ctrl.style="color:green; font-style:Italic; background-color:yellow;"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
