import { Component, OnInit } from '@angular/core';
//importamos menu-controller
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-guardia',
  templateUrl: './guardia.page.html',
  styleUrls: ['./guardia.page.scss'],
})
export class GuardiaPage{

    //intectamos el menu controller al constructor 
    constructor( private menuCtrl: MenuController) { }

    // ngOnInit() {
    // }
  
    //creamos metodo //se visualice y oculte el menu
    onClick() {
      this.menuCtrl.toggle();
    }

}
