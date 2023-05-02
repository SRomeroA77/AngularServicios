import { Component } from '@angular/core';
import { ArticulosService } from './articulos.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {
  articulos : any;

  constructor(private articulosServicio: ArticulosService){
  }

  ngOnInit(){
        this.articulos = this.articulosServicio.retornar();
  }
}

interface IArticulos {
  codigo : number,
  descripcion : string,
  precio : number
}
