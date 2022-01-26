import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit{

  termino:string = '';
  hayError:boolean = false;
  paises:Country[] = [];
  tam:boolean = false;

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
    this.calTam();
  }

  buscarCapital(termino:string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
    .subscribe((resp) =>{
      console.log(resp);

      this.paises = resp;
    },
    (err)=>{
      this.hayError = true;
      this.paises = [];
    })
  }

  sugerencias(termino:string){
    this.hayError = false;
  }

  calTam(){
    if(screen.width < 450){
      this.tam = false;
    }else{
      this.tam = true;
    }
  }



}
