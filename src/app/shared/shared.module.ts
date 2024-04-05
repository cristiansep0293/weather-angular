import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

import { ToggleThemeComponent } from './components/toggle-theme/toggle-theme.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    ToggleThemeComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule
  ],
  exports: [
    LoaderComponent,
    ToggleThemeComponent
  ]
})
export class SharedModule { }
