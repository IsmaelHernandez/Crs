import { Component, OnInit } from '@angular/core';
//importamos menu-controller
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reporte-incidencia',
  templateUrl: './reporte-incidencia.page.html',
  styleUrls: ['./reporte-incidencia.page.scss'],
})
export class ReporteIncidenciaPage {

 //intectamos el menu controller al constructor 
 constructor( private menuCtrl: MenuController) { }

 // ngOnInit() {
 // }

 //creamos metodo //se visualice y oculte el menu
 onClick() {
   this.menuCtrl.toggle();
 }
}
