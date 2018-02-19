import { Component, ViewChild, OnInit} from '@angular/core';
import { Project, Project2 } from './proyecto.model';
import { NgForm } from '@angular/forms';
import { Update,
         Social,
         Coin,
         Pool,
         Exchange,
         Subscriptor,
        SocialNetwork,
        Multimedia,
        User,
        Membership,
        Subscription,

      } from '../models/modelos.model';

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
   templateUrl:"./detalle-proyecto.component.html",
   styleUrls:["./detalle-proyecto.component.css"],
 	 providers: [FeedService]
 })

export class DetailsComponent implements OnInit {
  constructor(private feedService: FeedService){}

// modal:any = [
//   {title:'Titulo', description:'descripcion'},
//   {title:'Titulo', description:'descripcion'}
// ];

liked:any = '';
disLiked:any = '';
likes:boolean;
disLikes:boolean;
barLikes:number;
barLikesProgress:number;
status:string ='actives';
mostrar:string = '';

toggleModalHover(mensaje){

// alert(mensaje);
this.mostrar = mensaje;

  // if(this.status === 'active'){
  //   return  this.status = 'INactive';
  // }
  return this.status = 'active';
}

cerrar(){
  return  this.status = 'INactive';
}

Msg:any = [
  {title:'ADVERTENCIA',
description:'Esta información es confidencial de cada uno de los proyectos ICO, es ilegal mencionar los Exchange donde harán lanzamiento, esto puede conllevar a un cierre del proyecto por parte de la SEC (Securities and Exchange Commission), un proyecto sólido jamás dirá el Exchange en el que se comercializará, por lo menos en fase ICO..',
clase:'Exch',
},

  {title:'ADVERTENCIA',
  description:'1. No hablamos sobre nuestras piscinas con nadie que no esté relacionado con este grupo.',
  regla2:'No nos contacte con ofertas que haya adquirido. Solo Francis @TheKinGeek (El Francis)  y @Mr.Killer  contacta directamente con los equipos de ICO, Si nos enteramos que están hablando en nombre de DCO sin previa autorización, al menos que el los haya autorizado.',
  regla3:'3. NO PUBLIQUE LA DIRECCIÓN DE LA PISCINA EN NINGUN CANAL FUERA DE NUESTRO CANAL, NO HAGA PERDEMOS UN NEGOCIO POR UNA FUGA DE INFO PRIVADO, TODOS LOS NEGOCIOS DE PISCINAS SON PRIVADA CON LA EMPRESA Y SE FIRMA UN CONTRATO DE NO DIVULGACIÓN, SI LO ROMPEMOS PERDEMOS EL NEGOCIO Y SI ENCONTRAMOS QUIEN LO HIZO SERA BANEADO DE POR VIDA.',
  clase:'Warning',
  }
];


modals:any = [
  {title:'ADVERTENCIA', description:'descripcion'},
  {title:'modal2', description:'descripcion'},
];

data='22';

//Ejemplo Modelo Proyecto---------------------------------------------------------------

reaction: Social = new Social(
  100,
  40
);

coinData: Coin = new Coin(
  'BOON TECH',
  'BNTCH',
  '0,04', //PrecioUsd
  '0000001234',//PrecioEth
  9000, //MounthPerEth
  '10.000.000',  //Hard Cap USD
  '80.000.000',   //Total Supply
  '50.000.000',   //Token Bloq
  'Estos tokens estaran bloqueados por x cantidad de tiempo'    //Token Bloq
);

pool: Pool = new Pool(
  true,
  'mensaje de alerta',
  1,
  4,
  new Date,
  'https://www.primablock.com',
  new Date
);


multimedia:Multimedia[] =[
  new Multimedia ('Descripción video', 'https://www.youtube.com'),
  new Multimedia ('Descripción video', 'https://www.youtube.com'),
];

socialNet:SocialNetwork[] =[
  new SocialNetwork ('bitcoin', 'https://www.bitcointalk.com'),
  new SocialNetwork ('reddit', 'https://www.reddit.com'),
];

subscriptor:Subscriptor[] =[
  new Subscriptor ('andres@gmail.com'),
  new Subscriptor ('andres@gmail.com')
];

exc:Exchange[] =[
  // new Exchange ('Binance', 'link'),
  // new Exchange ('EtherDelta', 'link'),
];

news:Update[] =[
  new Update ('Titulo Noticia Genesis',
  'Descripción Noticia Genesis',
  'www.linkNoticia.com',
  new Date,
  new Date,
 )
];

project: Project = new Project(
  2231,
  'Titulo',
  'ico',
  new Date,
  this.pool,
  this.coinData,
  this.reaction,
  this.exc,
  this.news,
  this.subscriptor,
  this.socialNet,
  this.multimedia,

  '30%',
  '10',
  '1',
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



//Ejemplo Modelo usuario---------------------------------------------------------------






subscrip:Subscription[] =[
  new Subscription (241235, this.coinData.name),
  new Subscription (341263, this.coinData.name),
];

likeProjects: number[] = [
  23312,
  55323,
];

dislikeProjects: number[] = [
  21377,
];

membership: Membership = new Membership(
  new Date,
  new Date
);

usuario: User = new User(
  2231254,
  'Andreas Araveug',
  'vip',
  this.subscrip,
  this.likeProjects,
  this.dislikeProjects,
  true,
  this.membership


);







faqP:string = 'pool';



project2: Project2 = new Project2(
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

// cantidadTokens:string = this.project.mountPerEther;

advertenciaPool:string = 'NO PUBLIQUE LA DIRECCIÓN DE LA PISCINA EN NINGUN CANAL FUERA DE NUESTRO CANAL, NO HAGA PERDEMOS UN NEGOCIO POR UNA FUGA DE INFO PRIVADO, TODOS LOS NEGOCIOS DE PISCINAS SON PRIVADA CON LA EMPRESA Y SE FIRMA UN CONTRATO DE NO DIVULGACIÓN, SI LO ROMPEMOS PERDEMOS EL NEGOCIO Y SI ENCONTRAMOS QUIEN LO HIZO SERA BANEADO DE POR VIDA';
index:any;

likeProject(){//validamos si el usuario ya ha hecho like a este proyecto...
 return  this.liked = this.usuario.likeProjects.find(proyecto => proyecto === this.project._id);
}
disLikeProject(){//validamos si el usuario ya ha hecho disLike a este proyecto...
return  this.disLiked = this.usuario.disLikeProjects.find(proyecto => proyecto === this.project._id);
}

quitarLike(){
  this.index = this.usuario.likeProjects.indexOf(this.project._id);
  this.usuario.likeProjects.splice(this.index,1)
  this.project.social.likes-=1;
  this.upLikeBar();

  return this.likes=false;
}

sumarLike(){
  this.project.social.likes+=1;
  this.usuario.likeProjects.push(this.project._id);
  this.upLikeBar();

  return this.likes=true;
};

sumarDisLike(){
  this.project.social.dislikes+=1;
  this.usuario.disLikeProjects.push(this.project._id);
  this.upLikeBar();

  return this.disLikes=true;

};


quitardisLike(){
  this.index = this.usuario.disLikeProjects.indexOf(this.project._id);
  this.usuario.disLikeProjects.splice(this.index,1)
  this.project.social.dislikes-=1;
  this.upLikeBar();

  return this.disLikes=false;
};

upLikeBar(){
  //sacamos porcentaje equivalente al fill de la barra de likes
  this.barLikes = this.project.social.likes + this.project.social.dislikes;
  console.log(`Total reactions ${this.barLikes}`);
  this.barLikesProgress = Math.round((this.project.social.likes*100)/this.barLikes);
  // Math.round(this.barLikesProgress) //redondear a entero el resultado
  console.log(`Barra de progreso en ${this.barLikesProgress}%`);
  $('.progresados').css('width',`${this.barLikesProgress}%`);
};

like(){
  // console.log(this.findProject());
  console.log(this.likes);
  console.log(this.usuario);

  if(!this.likes){//si el proyecto NO tiene like, entonces SUMELE 1 like
    if(this.disLikes){
      this.quitardisLike();
    }
    return this.sumarLike();
}
// si el proyecto si tiene like, entonces restele 1 like
return this.quitarLike();
}

disLike(){
  if(!this.disLikes){//si el proyecto NO tiene disLike, entonces SUMELE 1 Dislike
    if(this.likes){
      this.quitarLike();
    }
  return this.sumarDisLike();
  }// si el proyecto si tiene disLike, entonces restele 1 like
return this.quitardisLike();
}


  ngOnInit(){

    //validamos si el usuario ya le ha dado like al proyectos
    this.upLikeBar();
    if(this.likeProject()){//si el proyecto tiene like
      this.likes=true;
      this.disLikes=false;
    }if(this.disLikeProject()){
      this.likes=false;
      this.disLikes=true;
    }else{
      this.likes=false;
      console.log(this.likes);
    };

    $('body').css('overflow-y','visible');

    console.log(this.modals);
    console.log(this.project);
    console.log(this.usuario);
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
