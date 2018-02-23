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

faqVip:Faq[] =[
  new Faq ('¿Cuál es el beneficio de ser Miembro VIP?', `Los VIP reciben contenido exclusivo sobre inversiones ICO, criptomonedas y la posibilidad de entrar en piscinas de inversión de venta privada, esto es muy importante ya que la tendencia de ahora en adelante en proyectos solidos serán las ventas privadas a solo inversores acreditados, esto dado por las regulaciones impuestas por la FCC, ¿ Cómo hacerse inversor acreditado?, hay 2 formas 1.- tener una ganancia anual probada de 200k USD si es soltero o 300k si es una pareja, 2.- Tener declarado 1millon de capital en patrimonio. Esto paso en las IPO al principio todos podían comprar luego, solo VC, Inversores acreditados, aprovechen las ICO públicas que se puedan en los próximos meses veremos cómo dejarán de existir por lo menos en proyectos serios, vendrán nuevos Scams o ICO poco sólidas como inversión que no tienen de otra que vender en venta pública sino hay interés privado. La FCC no tiene empleomanía para hacer esto rápido, así que aprovechen y trataremos de organizar más Piscinas de Inversión. Ejemplo GEMS acaba de cancelar todo y hacer AirDrop`),
  new Faq ('¿Cuál es el costo de la membresía?', `El costo actual de nuestra VIP es de $150USD al mes los cuales son pagados en criptomonedas:
Bitcoin, Ethereum, Litecoin, o Bitcore BTX`),
new Faq ('¿Cada cuánto tiempo debo pagar?', `Mensual, Si decides no pagar el próximo mes se te vence la membresía y puedes seguir utilizando el grupo como miembro regular.`),
new Faq ('¿Seré rico siendo Miembro VIP?, ¿Siempre ganare?', `La respuesta es NO, todo dependerá del capital que tengas para invertir, paso a paso se llega a cualquier lugar. Algo muy importante para tener en cuenta es que solo se pierde si vendes a perdida. Otra cosa es que nunca debes invertir dinero el cual no puedes perder.`),
new Faq ('¿No sé nada sobre criptomonedas, me recomiendas entrar?', `Si no sabes cómo utilizar wallets, de Bitcoin o Ethereum, operar en exchanges, invertir en ICO y llevar prácticas de seguridad sobre la soberanía de tu dinero, no te preocupes porque tenemos vídeo tutoriales los cuales te ayudaran desde cero a operar en este mundo!, todas tus dudas serán respondidas dentro de la comunidad vip en discord.`),
new Faq ('¿Ofrecen señales de entrada y salida?', `No, en DineroConOpciones no ofrecemos este tipo de señales trading ya que son muy arriesgadas y el punto del VIP es que todos los miembros obtengan rentabilidad de manera segura.`),
];

faqPool:Faq[] =[
  new Faq ('¿Cuándo recibimos los tokens de una piscina?', 'Normalmente 7 días luego de la ICO, algunas te los envían de una vez, pero están bloqueados por el contrato y no se pueden mover hasta que la ICO los libere, la única forma de saber esta información ya que no es Standard es yendo al Telegram de la ICO y preguntarlo, El equipo DCO y la comunidad trataran siempre de investigar estos datos y publicarlos en #inversiones-recordatorios asi que lee todo lo que se publique en ese canal para mantenerte al tanto. Lee Lee Lee y ser paciente son los activos más valiosos de este mundo de Cripto.'),
  new Faq ('¿Cuándo llegara a los exchanges?', 'esta información es secreta entre las ICO y los Exchange, firman clausulas de confidencialidad ya que se enfrentan a ser cerradas por  la facultad de la Comisión Nacional del Mercado de Valores, los proyectos solidos nunca brindarán esta información'),
];


preguntas(){
  if(this.faqP == 'pool'){
    // $(".infoUser").css("height","400px !important");
    return   this.faqs = this.faqPool; //users es un array del modelo User

  }
  // $(".infoUser").css("height","250px");
  return   this.faqs = this.faqVip; //users es un array del modelo User


}

// panelOpenState: boolean = true;

nuevoa(){
  // console.log(this.faqs);
}

step = 1;
}
