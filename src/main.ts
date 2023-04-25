import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  {
    path:'',loadChildren:()=>import('./app/routes.root')
  },

];

 bootstrapApplication(AppComponent,{
  providers:[
    importProvidersFrom(RouterModule.forRoot(routes), BrowserAnimationsModule),
  ],

 })

