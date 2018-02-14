// import {EventEmitter, Output } from '@angular/core';
import { Injectable } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Injectable()
  export default class FeedService{


      // showDetail(){
      //   $('.contItemsu').css('animation', 'logo .6s forwards');
      // }
      //
      // hideDetail(){
      //   $('.contItemsu').css('animation', 'logo2 .6s forwards');
      // }

      abrirAlterno(payload){
        $('.alterno').addClass('abrirAlterno');
        sessionStorage.setItem("alterno", payload)
        console.log(payload);
      }

      toggleAlterno(){
        $('.subAlterno').toggleClass('abrirSubAlterno');
      }

      cerrarAlterno(payload){
        $('.alterno').removeClass('abrirAlterno');
        sessionStorage.setItem("alterno", payload)
        console.log(payload);
      }

      escondeScroll(payload){
        if(payload== true){
          $('body').css('overflow-y','hidden');
          $('body, html').animate({
            scrollTop: 0
          }, .2);
        }else{
          $('body').css('overflow-y','visible');
        }
      }
  }
