import { Component, OnInit } from '@angular/core';
import { MiLibreriaService } from 'mi-libreria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'librerias2';
  mensaje = '';

  constructor(
    public miLibreriaService: MiLibreriaService
  ) {

  }

  ngOnInit() {
    console.log(this.miLibreriaService.getMensaje());
    this.mensaje = this.miLibreriaService.getMensaje();
  }
}
