import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { MiceComponent } from './mice/mice.component';
import { CatsGuardService } from './services/cats-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'welcome',component: WelcomeComponent},
  { path: 'dogs',component: DogsComponent},
  { path: 'cats',canActivate: [CatsGuardService],component: CatsComponent},
  { path: 'dogs',component: DogsComponent},
  { path: 'mice',component: MiceComponent},
  { path: '**', redirectTo: 'signin' }
]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
