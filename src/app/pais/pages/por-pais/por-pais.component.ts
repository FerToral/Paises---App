import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = '';
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(){
    console.log(this.termino);
    this.hayError = false;

    this.paisService.bsucarPais(this.termino)
      .subscribe((pais)=> {
        console.log(pais);
       
      }, (err)=>{
        this.hayError = true;
      });
  }
  
  
}
