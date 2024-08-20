import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const kuchbhi: CanActivateFn = (route, state) => {

  const router:Router=inject(Router);

  if(sessionStorage.getItem("username")!=null){
    return true;
  }

  router.navigate(["/login"]);
  return false;
};
