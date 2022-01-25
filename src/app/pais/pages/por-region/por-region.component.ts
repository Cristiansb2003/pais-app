import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class PorRegionComponent{
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  regionActiva:string = '';

  paisesRegion: Country[] = [];

  constructor(private paisesService: PaisService){}

  getClasCSS(region:string){
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';

  }

  activarRegion(region:string){
    if(region === this.regionActiva){return;}

    this.regionActiva = region;
    this.paisesRegion = [];
      //TODO: hacer el llamado al servicio
      this.paisesService.buscarRegion(region)
      .subscribe((resp)=>{
        console.log(resp);
        this.paisesRegion = resp;
      },
      (err)=>{
        alert('Ocurrio un Error');
      })
    }


}
