
const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],//路由守卫，验证是否登录
    children: [
      {//无组件路由: 不借助组件对路由进行分组
        path: '',
        canActivateChild:[AuthGuard],
        children: [
          { path: 'crisis', component: ManageCrisisComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from './admin.component';
import { ManageHeroesComponent } from './manage-heroes.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AuthGuard } from '../login/auth-guard.service';
import { ManageCrisisComponent } from './manage-crisis.component';
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
