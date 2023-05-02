import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http : HttpClient) { }

  retornar(){
    return this.http.get("http://scratchya.com.ar/vue/datos.php");
  }
}
