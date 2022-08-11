import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
 heroeborrado:string='';
  heroes:string[]=['spiderman','iroman','hulk','thor'];
  ac:number =0;
  borrarheroe():void{
    this.heroeborrado=this.heroes.shift()|| '';
     
  }
 

}
