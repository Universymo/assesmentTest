import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatsGuardService {

  catsActivated:boolean=false;
  classCats:string="disabled";

  constructor() { }

  canActivate()
  {
       if (this.catsActivated===true)
         { 
           this.classCats="";
           return true;
         }
     
      return false; 
  }
}
