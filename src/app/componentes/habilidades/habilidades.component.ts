import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  tecnologias:any;
  habilidades:any;

  constructor(private datosPorfolio:PorfolioService){

  }

  ngOnInit(){
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.tecnologias = data.tecnology;
      this.habilidades = data.abilities;
    })
  }

}
