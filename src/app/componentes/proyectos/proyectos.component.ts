import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  
  proyectosList: any;

  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit():void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.proyectosList=data.proyects;
    })
  }

}
