import { Component, OnInit } from '@angular/core';
//importamos menu-controller
import { MenuController } from '@ionic/angular';


import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reporte-novedades',
  templateUrl: './reporte-novedades.page.html',
  styleUrls: ['./reporte-novedades.page.scss'],
})
export class ReporteNovedadesPage {

  //intectamos el menu controller al constructor 
 constructor( private menuCtrl: MenuController) { }

  listado: Object;

  constructor(private http: HttpClient) {
    this.http.get("http://localhost/php_crsapp/consultados.php").subscribe(snap=>{
      console.log(snap);
      this.listado=snap;
      
    });

   }

 //creamos metodo //se visualice y oculte el menu
 onClick() {
   this.menuCtrl.toggle();
 }

}
