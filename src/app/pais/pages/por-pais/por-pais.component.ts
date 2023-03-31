import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino   : string = '';
  hayError  : boolean = false;
  paises    : Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.bsucarPais(termino)
      .subscribe((resPaises)=> {
        console.log(resPaises);
        this.paises = resPaises;
       
       
      }, (err)=>{
        this.hayError = true;
        this.paises = [];
      });
  }
  

}
