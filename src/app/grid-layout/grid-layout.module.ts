import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridLayoutRoutingModule } from './grid-layout-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GridLayoutRoutingModule
  ]
})
export class GridLayoutModule { }
