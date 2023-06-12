import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username:string='';
  password:string='';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  submit()
  { console.log("username:"+this.username);
    if(this.username==='')
         alert("The field username is required");
    else if (this.password==='')
         alert("The field password is required");
    else if ((this.username!=='admin') && (this.password!=='admin'))
          alert("incorrect credentials");
    else
          this.router.navigate(['/welcome']);

         
    
//console.log(this.username);
}


}
