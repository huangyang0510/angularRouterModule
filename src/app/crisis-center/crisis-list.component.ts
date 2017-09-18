
// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Crisis } from './model/crisis.model';
import { CrisisService } from './crisis.service';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises | async" [class.selected]="isSelected(crisis)" (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span>
        {{ crisis.name }}
      </li>
    </ul>

    <router-outlet></router-outlet>
  `
})
export class CrisisListComponent implements OnInit {
  crises: Observable<Crisis[]>;

  private selectedId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CrisisService
  ) { }

  ngOnInit() {
    this.crises = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      });
  }

  isSelected(crisis: Crisis) { return crisis.id === this.selectedId; }

  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
