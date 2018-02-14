import { Component, ViewChild, Input, OnInit } from '@angular/core';
// import { MatTableDataSource, MatSort } from '@angular/material';
import { Steemit } from './steemit.model';
import FeedService from '../feed/feed.service';
declare var jQuery:any;
declare var $:any;

const steemArt = new Steemit(
    'Titulo articulo para redirigir a steemet Blog',
    'Respuesta',
    'http://www.facebook.com'
  );

 @Component({
   selector: "app-steemit",
   templateUrl:"./steemit.component.html",
   styleUrls:["./steemit.component.css"],
 	providers: [FeedService]
 })

export class steemitComponent implements OnInit  {
    constructor(private feedService: FeedService){}

    // public loading:boolean = false;
loading:boolean = true;

ngOnInit(){
  // alert(this.loading);
  this.loading = false;
  // alert(this.loading);

}

// panelOpenState: boolean = true;
  steemits:Steemit[] = new Array(10).fill(steemArt); //users es un array del modelo User

nuevoa(){
}

step = 1;
}
