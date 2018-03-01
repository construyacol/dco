import { Component, ViewChild, OnInit, Input} from '@angular/core';
import { ProjectList, CoinData, Ad, ModalResponse, LinkArray } from '../publicaciones/lista.model';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
// import { MatTableDataSource, MatSort } from '@angular/material';
// import UserService from '../../user.service';
// import { User } from '../user.model';
declare var jQuery:any;
declare var $:any;



 @Component({
   selector: "app-feed",
   templateUrl:"./feed.component.html",
   styleUrls:["./feed.component.css"],
 	 providers: []
 })

export class FeedComponent implements OnInit {
  // constructor(private feedService: FeedService){}

status:string;

  @Input() url: SafeResourceUrl;

      constructor (public sanitizer:DomSanitizer) {}

      id:string = "http://www.youtube.com/embed/cUbRC6dzCLs";



//EJEMPLO MODELO PROYECTO LISTA -----------------------------------------------------

  links:LinkArray[] =[
    new LinkArray ('Link1', 'https://www.youtube.com/watch?v=WlosjSe5B8c'),
    new LinkArray ('Link2', 'https://www.youtube.com/watch?v=EbfK7dei7ec'),
  ];


  video:any = `1VUa99-tJqs`;

  coinData: CoinData = new CoinData(
    'BoonTech',
    'boon',
    '4',
    '10',
    30,
    .3,
  );

  itemlist:ProjectList = new ProjectList(
    22313,
    'comentario sobre la publicación',
    'ico',
    'project',
    'vip',
    new Date,
    true,
    this.coinData,
    'http://www.youtube.com/embed/8rprnWl_zao',
    this.links,
    new Date(2018,0,10),
    new Date(2018,2,10)
  );

  itemlist2:ProjectList = new ProjectList(
    22314323,
    'comentario sobre la publicación',
    'pre-ico',
    'project',
    'vip',
    new Date,
    false,
    this.coinData,
    'http://www.youtube.com/embed/uO9VmQjGQtk',
    this.links,
    new Date(2017,0,10),
    new Date(2018,4,10),
  );

  itemlist3:ProjectList = new ProjectList(
    2231432323,
    'comentario sobre la publicación',
    'pre-ico',
    'project',
    'vip',
    new Date,
    false,
    this.coinData,
    'http://www.youtube.com/embed/21iCQymFeLI',
    this.links,
    new Date(2018,0,10),
    new Date(2018,4,10),
  );

//EJEMPLO MODELO ANUNCIO------------------------------------------------------------------

advert:Ad = new Ad(
  'Titulo anuncio',
  'ad',
  'vip',
  new Date,
  'Descripción anuncio',
  this.links
);


//Array feed

alimentadorFeed:any[] = [
  this.itemlist,
  this.itemlist2,
  this.itemlist3,
  this.advert,
  this.advert,
];
hoy:Date = new Date;
item:any;
diasTotal:any;
diasTranscu:any;
barDiasProgress:any;

  ngOnInit(){

    this.alimentadorFeed.map( async (item)=>{

      if(item.typeRelease == "project"){

          let today = this.hoy.getTime();
          let inicia = item.dateStart.getTime();
          let termina = item.dateEnd.getTime();

          var diff = termina - inicia;
          var diff2 = today - inicia;

          item.diasTotal = Math.round(diff/(1000*60*60*24));
          item.diasTranscu = Math.round(diff2/(1000*60*60*24));
          item.barDiasProgress =  Math.round((item.diasTranscu*100)/item.diasTotal);

          // this.url = await this.sanitizer.bypassSecurityTrustResourceUrl(item.video);

          // item.video =  this.url;
      }
    });




  }


}
