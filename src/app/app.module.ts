import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { RouterModule }   from '@angular/router';
import { Ex2Component } from './ex2/ex2.component';
import {RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    Ex2Component
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule,
    HttpModule,
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
