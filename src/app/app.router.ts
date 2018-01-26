import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Component } from '@angular/core/src/metadata/directives';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


export const ROUTES: Routes = [

    { path:'', component: LoginComponent },
    { path:'professor', component: HomeComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot ( ROUTES );