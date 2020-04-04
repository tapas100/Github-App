import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    SearchBarComponent,
  ],
  exports:[SearchBarComponent],
  providers:[DataService,UserService]
})
export class ComponentsModule { }
