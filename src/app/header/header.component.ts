import { Component, OnInit } from '@angular/core';
import { CatsGuardService } from '../services/cats-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  classCats!:string;

  constructor(private catsGuardService:CatsGuardService) { }

  ngOnInit(): void {this.classCats=this.catsGuardService.classCats;}
 
  on_visited()
  {
    this.catsGuardService.catsActivated=true;
    this.catsGuardService.classCats="";
    this.classCats=this.catsGuardService.classCats;
  }
}
