import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SvtComponent } from './svt/svt.component';

const routes: Routes = [
  
  {
    path: "warehouse/cable/cvt",
    component:SvtComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CableRoutingModule { }