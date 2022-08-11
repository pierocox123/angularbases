import { Component } from "@angular/core";

@Component({
selector:'app-contador',
template:`
<h1 class="text-red-300 font-bold"> {{title}} </h1>
<button (click)="acumular(base)" 
class=" b"
>{{+base}} </button>
<span>{{numero}}</span>
<button (click)="acumular(-base)"
 class=" b">
  {{-base}} </button>`
})



export class contadorComponent {
  title:String = 'contador app';
  base :number=5;
  numero:number = 20;
acumular(number:number)
{
 this.numero+=number; 
}
}