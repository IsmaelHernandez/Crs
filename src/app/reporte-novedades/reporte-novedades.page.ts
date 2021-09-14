import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reporte-novedades',
  templateUrl: './reporte-novedades.page.html',
  styleUrls: ['./reporte-novedades.page.scss'],
})
export class ReporteNovedadesPage implements OnInit {

  listado: Object;

  constructor(private http: HttpClient) {
    this.http.get("http://localhost/php_crsapp/consultados.php").subscribe(snap=>{
      console.log(snap);
      this.listado=snap;
      
    });

   }

  ngOnInit() {
  }

}
