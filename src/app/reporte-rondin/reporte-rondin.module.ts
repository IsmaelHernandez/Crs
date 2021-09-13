import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteRondinPageRoutingModule } from './reporte-rondin-routing.module';

import { ReporteRondinPage } from './reporte-rondin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteRondinPageRoutingModule
  ],
  declarations: [ReporteRondinPage]
})
export class ReporteRondinPageModule {}
