
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';

import { HeroService } from './hero.service';

import { HeroesRoutingModule } from './heroes-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers:[
    HeroService
  ]
})
export class HeroesModule { }
