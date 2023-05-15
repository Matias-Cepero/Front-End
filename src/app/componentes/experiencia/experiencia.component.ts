import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  educacionList:any;
  experienciaList:any;

  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.educacionList=data.education;
      this.experienciaList=data.experiencie;
    })
  }

}
