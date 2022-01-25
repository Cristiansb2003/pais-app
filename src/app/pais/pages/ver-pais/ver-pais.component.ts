import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
    switchMap( ({id})=> this.paisService.getPaisAlpha(id) ),
    tap(console.log)
    )
    .subscribe( pais=>{
      this.pais = pais[0];
      console.log(this.pais.name);
      
    } )

    //  this.activatedRoute.params
    //  .subscribe( ({id}) =>{
    //    console.log(id);
    //    this.paisService.getPaisAlpha(id)
    //   .subscribe(pais =>{
    //      console.log(pais);
    //     
    //    })
    //    } )

    
    

  }

}
