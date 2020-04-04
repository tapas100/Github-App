import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatCheckboxModule, MatListModule, MatButtonModule, MatRippleModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatPaginatorModule, MatTableModule, MatSlideToggleModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  declarations: [],
  exports:[
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCardModule
  ]
})
export class MaterialModule { }
