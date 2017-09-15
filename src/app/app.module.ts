

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/Router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    LoginModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
