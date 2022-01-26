import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-card',
  templateUrl: './pais-card.component.html',
  styleUrls: ['./pais-card.component.css']
})
export class PaisCardComponent implements OnInit {
  @Input() paises:Country[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
