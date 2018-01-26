import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './login/modal/modal.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
