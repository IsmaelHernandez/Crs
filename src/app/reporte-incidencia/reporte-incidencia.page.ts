import { Component, OnInit } from '@angular/core';
//Importamos menu-controller
import { MenuController } from '@ionic/angular';
//Importamos formcontrol  y FormGrup
import { FormControl, FormGroup  } from '@angular/forms';



@Component({
  selector: 'app-reporte-incidencia',
  templateUrl: './reporte-incidencia.page.html',
  styleUrls: ['./reporte-incidencia.page.scss'],
})
export class ReporteIncidenciaPage {

  fechaN: Date = new Date();
 
  //Agrupar varios controles utilizando FormGroup.
  // Instancias de formcontrol
  guardia = new FormGroup({
    nombre: new FormControl(''),
    campus: new FormControl(''),
    estado: new FormControl(''),
    fecha: new FormControl(''),
    horario: new FormControl(''),
    area: new FormControl(''), 
    titulodelaincidencia: new FormControl(''), 
    descripciondelaanomalia: new FormControl(''),
  });

 //Inyecectamos el menu controller al constructor 
 constructor( private menuCtrl: MenuController) { }

 // ngOnInit() {
 // }

 //Creamos metodo //se visualice y oculte el menu
 onClick() {
   this.menuCtrl.toggle();
  }

  

  

  

 
}
