import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { WareHouseRoutingModule } from './warehouse-routing-module';
import { CableComponent } from './card-list/cable/cable.component';
import { ToolsComponent } from './card-list/tools/tools.component';
import { PerObjectComponent } from './card-list/per-object/per-object.component'


@NgModule({
  declarations: [
    CardListComponent,
    CableComponent,
    ToolsComponent,
    PerObjectComponent
  ],
  imports: [
    CommonModule,
    WareHouseRoutingModule
  ]
})
export class WarehouseModule { }
