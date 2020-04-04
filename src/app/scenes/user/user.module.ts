import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/userlist.component';
import { ComponentsModule } from '../../components/components.module';
import { DataService } from '../../services/data.service';
import { UserService } from '../../services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutes } from './user-routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ComponentsModule,
    MaterialModule,
    RouterModule.forChild(UserRoutes)

  ],
  declarations: [UserListComponent, UserDetailsComponent],
  exports:[UserListComponent,UserDetailsComponent],
  providers:[DataService,UserService]
})
export class UserModule { }
