import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [];

 bootstrapApplication(AppComponent,{
  providers:[
    importProvidersFrom(RouterModule.forRoot(routes)),
  ],

 })

