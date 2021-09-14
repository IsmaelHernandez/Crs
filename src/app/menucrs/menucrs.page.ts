import { Component, OnInit, } from '@angular/core';
//importamos menu-controller
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menucrs',
  templateUrl: './menucrs.page.html',
  styleUrls: ['./menucrs.page.scss'],
})
export class MenucrsPage {

  //intectamos el menu controller al constructor 
  constructor( private menuCtrl: MenuController) { }

  // ngOnInit() {
  // }

  //creamos metodo //se visualice y oculte el menu
  onClick() {
    this.menuCtrl.toggle();
  }

}
