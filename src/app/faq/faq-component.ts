import { Component, ViewChild, Input, OnInit } from '@angular/core';
// import { MatTableDataSource, MatSort } from '@angular/material';
import { Faq } from './faq.model';
import FeedService from '../feed/feed.service';
declare var jQuery:any;
declare var $:any;

const faq = new Faq(
    'PREGUNTA',
    'Respuesta'
  );

const faqPool = new Faq(
      'PREGUNTA Pool',
      'Respuesta Pool'
    );

 @Component({
   selector: "app-detail",
   templateUrl:"./faq.component.html",
   styleUrls:["./faq.component.css"],
 	providers: [FeedService]
 })

export class FaqComponent implements OnInit  {
    constructor(private feedService: FeedService){}

    @Input() faqP:string;


    // public loading:boolean = false;
loading:boolean = true;
faqs:Faq[] = [];

ngOnInit(){
  // alert(this.loading);
  console.log(this.faqP);

  this.loading = false;
  // alert(this.loading);
  this.preguntas();
}

preguntas(){
  if(this.faqP == 'pool'){
    // $(".infoUser").css("height","400px !important");
  return   this.faqs = new Array(10).fill(faqPool); //users es un array del modelo User
  }
  // $(".infoUser").css("height","250px");

  return this.faqs = new Array(10).fill(faq); //users es un array del modelo User

}

// panelOpenState: boolean = true;

nuevoa(){
  // console.log(this.faqs);
}

step = 1;
}
