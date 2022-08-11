import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
 
  nombre :string='jean piere';
  edad :number =2;
  obteneredad():string
  {
    return `${this.nombre}-${this.edad}`
  }
  cambiarnombre():void
  {
    this.nombre  ="spiderman";
  }
  get nombremayuscula(){
    return this.nombre.toUpperCase();
  }
}
