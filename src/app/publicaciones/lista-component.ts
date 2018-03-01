import { Component, OnInit, Input} from '@angular/core';
declare var jQuery:any;
declare var $:any;


 @Component({
   selector: "app-lista-publi",
   templateUrl:"./lista.component.html",
   styleUrls:["./lista.component.css"],
 	 providers: []
 })

export class ListComponent implements OnInit {

  @Input() alimentadorFeed:any[];

status:string;
mostrar:string;


onNotifyClicked(message:string):void{
    this.status = message;
    console.log(this.status);
}

getBarProgress(payload){
  return `${payload}%`;
}

toggleModalHover(mensaje){
this.mostrar = mensaje;
// if(this.status != 'active'){
  console.log(mensaje);
return  this.status = 'active';
// }
// return  this.status = 'inactive';

}


poolData:any='00:00:00';

news:any = [

  {
    title:'titulo noticia',
    description:'Exch',
    createdAt:'Exch'
    },
    {
    title:'titulo noticia',
    description:'Exch',
    createdAt:'Exch'
    }
];



  ngOnInit(){
    // console.log(this.status);

    // console.log(this.alimentadorFeed);
    // $(document).on("click",function(e) {
    //
    //          var container = $("#appM");
    //
    //             if (!container.is(this.target) && container.has(this.target).length === 0) {
    //                // alert("¡Pulsaste fuera!");
    //                 // return console.log(this.status);
    //
    //                // this.status = 'INactive';
    //                // console.log();
    //             }
    //      });

  }

}
