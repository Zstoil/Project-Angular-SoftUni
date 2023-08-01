import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListComponent } from './card-list/card-list.component';
import { WareHouseRoutingModule } from './warehouse-routing-module';
import { CableComponent } from './card-list/cable/cable.component';
import { ToolsComponent } from './card-list/tools/tools.component';
import { PerObjectComponent } from './card-list/per-object/per-object.component';
import { SvtComponent } from './card-list/cable/svt/svt.component'
import { CableRoutingModule } from './card-list/cable/cable-routing-module';


@NgModule({
  declarations: [
    CardListComponent,
    CableComponent,
    ToolsComponent,
    PerObjectComponent,
    SvtComponent
  ],
  imports: [
    CommonModule,
    WareHouseRoutingModule,
    CableRoutingModule
  ]
})
export class WarehouseModule { }
