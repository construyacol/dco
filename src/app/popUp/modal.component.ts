import { Component, Input, OnInit} from '@angular/core';
declare var jQuery:any;
declare var $:any;

 @Component({
   selector: "app-modal",
   templateUrl:"./modal.component.html",
   styleUrls:["./modal.component.css"],
 	 providers: []
 })

export class ModalComponent implements OnInit {

@Input() NModal:any;
@Input() Datas:any;

ngOnInit(){
  // console.log(this.NModal[0]);
console.log(this.Datas);
}


      ocultar(){
        // $('#contenedorModal').css('display','none');
        $('#modal').css('animation','animationOut .8s forwards');
        $('#overlay').removeClass('active');

      };

}
