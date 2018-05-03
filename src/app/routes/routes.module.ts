import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Ex2Component } from '.././ex2/ex2.component';
import { NewCmpComponent } from '.././new-cmp/new-cmp.component';

const routes :Routes=[
       {
        path: '',
        component: Ex2Component
      },
      {
        path: 'heroes',
        component: NewCmpComponent
      }
    ];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
