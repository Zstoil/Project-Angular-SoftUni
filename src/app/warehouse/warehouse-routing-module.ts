import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CableComponent } from './card-list/cable/cable.component';

const routes: Routes = [
  
  {
    path: "warehouse",
    component:CardListComponent
  },
  {
    path: "warehouse/cable",
    component:CableComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WareHouseRoutingModule { }