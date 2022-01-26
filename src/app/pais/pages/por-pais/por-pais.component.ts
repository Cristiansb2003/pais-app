import { Component, OnInit} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  `
  li{
    cursor:pointer;
  }
  `
  ]
})
export class PorPaisComponent implements OnInit{

  termino:string = '';
  hayError:boolean = false;
  paises: Country[] = [];

  paisesSugeridos:Country[] = [];
  mostrarSugerencias:boolean = false;
  tam:boolean = false;

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
    this.calTam();
  }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
    .subscribe((resp) =>{
      console.log(resp);
      this.mostrarSugerencias = false; 
      this.paises = resp;
    }, (err)=>{
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    //crear sugerencias

    this.paisService.buscarPais(termino)
    .subscribe( 
      paises => this.paisesSugeridos = paises.splice(0,5),
      (err)=> this.paisesSugeridos = []
      )
    
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }

  calTam(){
    if(screen.width < 450){
      this.tam = false;
    }else{
      this.tam = true;
    }
  }

}
