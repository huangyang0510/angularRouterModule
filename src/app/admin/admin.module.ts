import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageCrisisComponent } from './manage-crisis.component';
import { ManageHeroesComponent } from './manage-heroes.component';
import { AdminComponent } from './admin.component';


@NgModule({
  imports:[
    CommonModule,
    AdminRoutingModule
  ],
  declarations:[
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisisComponent,
    ManageHeroesComponent
  ],
  providers:[

  ]
})
export class AdminModule{}
