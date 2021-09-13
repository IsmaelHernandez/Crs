import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'reporte-novedades',
    loadChildren: () => import('./reporte-novedades/reporte-novedades.module').then( m => m.ReporteNovedadesPageModule)
  },
  {
    path: 'guardia',
    loadChildren: () => import('./guardia/guardia.module').then( m => m.GuardiaPageModule)
  },
  {
    path: 'reporte-incidencia',
    loadChildren: () => import('./reporte-incidencia/reporte-incidencia.module').then( m => m.ReporteIncidenciaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
