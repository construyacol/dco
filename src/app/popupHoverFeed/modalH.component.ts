import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
declare var jQuery:any;
declare var $:any;

 @Component({
   selector: "app-modalHF",
   templateUrl:"./modalH.component.html",
   styleUrls:["./modalH.component.css"],
 	 providers: []
 })

export class ModalHoverFeedComponent implements OnInit {

@Input() status:any;
@Input() token:any;
@Input() dataPool:any;
@Output() notify:EventEmitter<string> = new EventEmitter<string>();


onClick(){
  this.notify.emit('CerrarPopUp');
}

cerrar(){
  return  this.status = 'inActive';
}

ngOnInit(){
  // console.log(this.NModal[0]);
// console.log(this.Datas);
console.log(this.token);
console.log(this.dataPool);
}


}
