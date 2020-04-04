import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/userlist.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const UserRoutes: Routes = [
    {
        path:'',
        redirectTo : 'user-list',
        pathMatch : 'full'
    },
    {
      path : 'user-list',
      component : UserListComponent
    },
    {
      path : 'user-details/:slug',
      component : UserDetailsComponent
    }


]
