import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
