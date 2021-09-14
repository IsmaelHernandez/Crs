import { Component, OnInit } from '@angular/core';
//importamos menu-controller
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-reporte-novedades',
  templateUrl: './reporte-novedades.page.html',
  styleUrls: ['./reporte-novedades.page.scss'],
})
export class ReporteNovedadesPage {

  //intectamos el menu controller al constructor 
 constructor( private menuCtrl: MenuController) { }

 // ngOnInit() {
 // }

 //creamos metodo //se visualice y oculte el menu
 onClick() {
   this.menuCtrl.toggle();
 }

}
