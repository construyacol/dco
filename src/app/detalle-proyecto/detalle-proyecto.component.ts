import { Component, ViewChild, OnInit} from '@angular/core';
import { Project, Project2 } from './proyecto.model';
import { NgForm } from '@angular/forms';
import { Update, Social, Coin, Pool, Exchange } from '../models/modelos.model';
import { Steemit } from '../steemit/steemit.model';
import FeedService from '../feed/feed.service';

declare var jQuery:any;
declare var $:any;

// import FeedService from '../feed/feed.service';
// import { MatTableDataSource, MatSort } from '@angular/material';
// import UserService from '../../user.service';
// import { User } from '../user.model';
// declare var jQuery:any;
// declare var $:any;



 @Component({
   selector: "app-detail2",
   templateUrl:"./detalle-proyecto2.component.html",
   styleUrls:["./detalle-proyecto.component.css"],
 	 providers: [FeedService]
 })

export class DetailsComponent implements OnInit {
  constructor(private feedService: FeedService){}


// new: Update = new Update(
//   'Noticia Nueva',
//   'Descripción'
// );

// food:Update = new Update[
//   {"titulo", "descripcion"}
// ];




reaction: Social = new Social(
  1000,
  20
);

coinData: Coin = new Coin(
  'nombre moneda',
  'simbolo moneda',
  'PrecioUsd',
  'PrecioEth',
  'Monto por Eth',
  'Hard Cap',
  'Total Supply',
  'Token Bloq',
  'Bloq Message'
);

pool: Pool = new Pool(
  true,
  1,
  4,
  new Date,
  'https://www.primablock.com',
  new Date
);


exc:Exchange[] =[
  new Exchange ('Nombre Exchange', 'link')
];

news:Update[] =[
  new Update ('Titulo Noticia Genesis',
  'Descripción Noticia Genesis',
  'www.linkNoticia.com',
  new Date,
  new Date,
 )
];

project2: Project2 = new Project2(
  2231,
  'Titulo',
  'ico',
  new Date,
  this.pool, 
  this.coinData,
  this.reaction,
  this.exc,
  this.news,

  '30% Bono',
  '10 eth',
  '1 eth',
  'www.websiteProyecto.com',
  'www.LinkWhitePaper.com',
  new Date,
  new Date,
  'Descripción Proyecto',
  'Equipo ',
  'Estado del Producto',
  'Socios',
  'Dirección Contrato Ether'
);

faqP:string = 'pool';



project: Project = new Project(
    '3556',
    'BoonTech',
    new Date,
    'BNC',
    '10 millones',
    '100 millones',
    '05 millones',
    '30%',
    '50 Eth',
    '0.2 Eth',
    'http://www.facebook.com',
    'whitepaper',
    'exchange',
    '100',
    '10',
    '10',
    '10',
    '10',
    new Date,
    new Date,
    true,
    `ICO de Data tipo DataWallet, Datum, esta tiene la diferencia que es la primera ICO sobre la Blockchain de EOS, y parte de YC, - La aplicación EOS sería favorable para la comunidad EOS; EOS actualmente en el límite del mercado n.°10
- Los corredores de datos ganan mucho dinero. En 2012, se informó que Acxiom había ganado $ 1,13 mil millones, ganando una ganancia de $ 77.26 millones.
- Los piratas informáticos violaron los sistemas de Equifax y robaron datos de identificación personal de más de 140 millones de estadounidenses.
`,
    `- Antecedentes del equipo de YC Alumni; YC lote 2015;
- Asesor Dino Amaral - Ph.D. Criptografía 2008-2013 en Brasil
- Jason Hamlin, 4 años en AC Nielson como gerente sénior (una compañía global de información, datos y medición con ingresos de $ 6.2 mil millones en 2015)
`,
    `- Carpeta INSTAR construida para pruebas beta
- La implementación beta está en curso con Gambeal (aplicación del cofundador)
`,
    `1. En conversaciones con empresas de seguro, compañías de nómina
2. Asociaciones confirmadas con Quanstamp, Partisia, Mobius ($ 80M cap)
    - Proporcionar auditoría QSP para el protocolo de investigación de mercado de EOS Blockchain
    - Asociación con Partisia en Computación segura multipartita. El intercambio seguro de Partisia fue la primera aplicación a gran escala y el uso comercial de SMC en el mundo. https://partisia.com/mpc-goes-live/; Tecnología patentada
`,'0x72c9f1BBCba8a4a0d6460ff1828d0abd2cF455'
);

// projects:Project[] = new Array(10).fill(this.project); //users es un array del modelo User

cantidadTokens:string = this.project.mountPerEther;

advertenciaPool:string = 'NO PUBLIQUE LA DIRECCIÓN DE LA PISCINA EN NINGUN CANAL FUERA DE NUESTRO CANAL, NO HAGA PERDEMOS UN NEGOCIO POR UNA FUGA DE INFO PRIVADO, TODOS LOS NEGOCIOS DE PISCINAS SON PRIVADA CON LA EMPRESA Y SE FIRMA UN CONTRATO DE NO DIVULGACIÓN, SI LO ROMPEMOS PERDEMOS EL NEGOCIO Y SI ENCONTRAMOS QUIEN LO HIZO SERA BANEADO DE POR VIDA';



  ngOnInit(){
    console.log(this.exc);
    $('body').css('overflow-y','visible');
    console.log(this.project);
    // $('#botonMenu1').css('color','rgb(0, 252, 108)');
    $(window).on("scroll",function(){
    if($(window).scrollTop()>398){
      $(".mat-toolbar").css("top","-55px");
    } else{
      $(".mat-toolbar").css("top","0px");
    }

    });

    // var elemento = $("#Madre");
      // var posicionEsta = elemento.position();
      // var fixPanel=posicionEsta.top;

      // var elemento2 = $("#documentacion");
      // var posicionDoc = elemento2.position();
      // var documentacio=posicionDoc.top;



      $(window).on("scroll",function(){
      if($(window).scrollTop()>450){

        $(".barritaPanel").css("height","50px");
        $("#menuSec").css("height","50px");
        $("#menuSec").css("box-shadow","0px 3px 5px 0px rgba(0,0,0,0.22)");
        $("#panelFix").css("position","fixed");
        $("#panelFix").css("height","100%");
        $(".infoDes").css("top","0px");
        $("#menuSec").css("position","fixed");
        $("#detalleUser").css("top","0px");
        $(".infoUser").css("height","100%");


        // $(".mat-toolbar").css("top","-55px");


        // $("#estadis").addClass("coolor");
        // $("#analis2").removeClass("coolor");
        // $("#estadis2").addClass("coolor");
      } else{
      $(".infoUser").css("height","380px");
      $("#detalleUser").css("top","55px");
      $("#panelFix").css("height","590px");
      $(".infoDes").css("top","80px");
      $(".barritaPanel").css("height","55px");
      $("#menuSec").css("box-shadow","0px 3px 5px 0px rgba(0,0,0,0.01)");
      $("#menuSec").css("position","absolute");
      $("#menuSec").css("height","55px");
      $("#panelFix").css("position","absolute");
      // $(".mat-toolbar").css("top","0px");


        // $("#estadis").removeClass("coolor");
        // $("#analis").addClass("coolor");
        // $("#estadis2").removeClass("coolor");
        // $("#analis2").addClass("coolor");
      }
      // if($(window).scrollTop()>documentacio){
      //   // alert("estas en documentación")
      //
      //   $("#estadis").removeClass("coolor");
      //   $("#docs").addClass("coolor");
      //   $("#estadis2").removeClass("coolor");
      //   $("#docs2").addClass("coolor");
      // } else{
      //   $("#docs").removeClass("coolor");
      //   $("#docs2").removeClass("coolor");
      //   // $("#estadis").addClass("coolor");
      // }

    });




  }


}
