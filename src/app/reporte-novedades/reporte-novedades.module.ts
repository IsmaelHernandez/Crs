import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteNovedadesPageRoutingModule } from './reporte-novedades-routing.module';

import { ReporteNovedadesPage } from './reporte-novedades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteNovedadesPageRoutingModule
  ],
  declarations: [ReporteNovedadesPage]
})
export class ReporteNovedadesPageModule {}
