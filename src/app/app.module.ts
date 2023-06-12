import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { MiceComponent } from './mice/mice.component';
import { CatsGuardService } from './services/cats-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HeaderComponent,
    WelcomeComponent,
    DogsComponent,
    CatsComponent,
    MiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CatsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
