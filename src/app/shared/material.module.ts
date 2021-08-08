import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';


const material = [
  MatToolbarModule,
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatGridListModule,
];

@NgModule({
  imports: [material],
  exports: [material],
  declarations: []
})
export class MaterialModule { }
