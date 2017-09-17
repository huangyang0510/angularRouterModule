import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrisisCenterRoutingComponent } from './crisis-center-routing.module';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisService } from "./crisis.service";




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingComponent
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent,
  ],
  providers:[
    CrisisService
  ]
})
export class CrisisCenterModule { }
