import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

//import { CrisisListComponent } from "./crisis-list.component";
//import { HeroListComponent } from './hero-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './login/auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-stategy';

const appRoutes: Routes = [
  //{ path: 'crisis-center', component: CrisisListComponent },
  //{ path: 'heroes', component: HeroListComponent },
  { path : 'compose', component: ComposeMessageComponent, outlet :'popup'},
  {   path : 'admin',
      loadChildren: 'app/admin/admin.module#AdminModule',
      canLoad: [AuthGuard]
      /**
       * PreloadAllModules策略不会加载被CanLoad守卫所保护的特性区。这是刻意设计的。、
       * CanLoad守卫的优先级高于预加载策略。
       * 如果我们要加载一个模块并且保护它防止未授权访问，请移除canLoad守卫，只单独依赖CanActivate守卫。
       * */
  },
  {
    path:'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,// <-- debugging purposes only
        //preloadingStrategy: PreloadAllModules
        preloadingStrategy: SelectivePreloadingStrategy
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers:[
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule {

}
