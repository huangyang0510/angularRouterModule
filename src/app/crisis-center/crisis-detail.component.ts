import { Crisis } from './model/crisis.model';

import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { slideInDownAnimation } from '../animatons';



import 'rxjs/add/operator/switchMap';

@Component({
  template: `
  <h2>HEROES</h2>
  <div *ngIf="crisis">
    <h3>"{{ crisis.name }}"</h3>
    <div>
      <label>Id: </label>{{ crisis.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="crisis.name" placeholder="name"/>
    </div>
    <p>
      <button >Back</button>
    </p>
  </div>
  `,
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.route.paramMap
    //       .switchMap((param: ParamMap) => this.service.getHero(param.get('id')))
    //   .subscribe((crisis: crisis) => this.crisis = crisis);
  }

  // gotoHeroes() {
  //   let heroId = this.crisis ? this.crisis.id : null;
  //   // Pass along the hero id if available
  //   // so that the HeroList component can select that hero.
  //   // Include a junk 'foo' property for fun.
  //   this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  // }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
