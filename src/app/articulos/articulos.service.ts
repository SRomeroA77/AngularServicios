import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  retornar(){
    return [
            {codigo:1, descripcion:"manzanas", precio:9.63},
            {codigo:2, descripcion:"melon", precio:14.00},
            {codigo:3, descripcion:"cebollas", precio:8.02}
    ];
  }
}
