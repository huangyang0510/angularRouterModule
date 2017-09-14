
// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Crisis } from './model/crisis.model';
import { CRISIS } from './crisis.service';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crisises " [class.selected]="isSelected(crisis)" (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span>
         <span class="badge">{{crisis.name}}</span>
      </li>
    </ul>

    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class CrisisListComponent implements OnInit {
  crisises : Crisis [] ;

  private selectedId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.crisises = CRISIS
  }

  isSelected(crisis: Crisis) { return crisis.id === this.selectedId; }

  onSelect(crisis : Crisis){
    this.selectedId = crisis.id
    this.router.navigate([crisis.id],{relativeTo:this.route});
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
