import{Injectable} from '@angular/core';

import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CrisisDetailComponent } from './crisis-center/crisis-detail.component';



@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CrisisDetailComponent>{

  canDeactivate(
    component: CrisisDetailComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Promise<boolean> | boolean {

      // Get the Crisis Center ID
    console.log (route.paramMap.get('id'));

     // Get the current URL
    console.log((state.url));
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if(!component.crisis || component.crisis.name === component.editName){
      return true;
    }
    return component.dialogService.confirm('Discard changes?');

  }
}
