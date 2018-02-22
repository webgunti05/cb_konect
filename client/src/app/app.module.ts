import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavService } from './services/nav.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopheaderComponent,
    SidemenuComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : '', redirectTo : 'Login', pathMatch : 'full'},
      { path : 'Home', component : HomeComponent},
      { path : 'Login', component : LoginComponent}
    ])
  ],
  providers: [
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
