import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-from',
  templateUrl: './register-from.component.html',
  styleUrls: ['./register-from.component.css']
})
export class RegisterFromComponent implements OnInit {

  public Email:string="twowaybinding";
  public FullName:string ="eventbinding";
  ChangeFullName(fullName:string){
    this.FullName= fullName;
  }
  constructor() { }

  ngOnInit() {
  }

}
