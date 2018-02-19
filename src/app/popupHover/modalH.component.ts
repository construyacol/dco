import { Component, Input, OnInit} from '@angular/core';
declare var jQuery:any;
declare var $:any;

 @Component({
   selector: "app-modalh",
   templateUrl:"./modalH.component.html",
   styleUrls:["./modalH.component.css"],
 	 providers: []
 })

export class ModalHoverComponent implements OnInit {

@Input() status:any;
@Input() token:any;

ngOnInit(){
  // console.log(this.NModal[0]);
// console.log(this.Datas);
// console.log(this.token);
}


}
