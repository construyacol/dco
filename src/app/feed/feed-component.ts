import { Component, ViewChild, OnInit} from '@angular/core';
import FeedService from '../feed/feed.service';

// import { MatTableDataSource, MatSort } from '@angular/material';
// import UserService from '../../user.service';
// import { User } from '../user.model';
// declare var jQuery:any;
// declare var $:any;



 @Component({
   selector: "app-feed",
   templateUrl:"./feed.component.html",
   styleUrls:["./feed.component.css"],
 	 providers: [FeedService]
 })

export class FeedComponent implements OnInit {
  constructor(private feedService: FeedService){}




  ngOnInit(){
    // $('#botonMenu1').css('background','#2D3A43');
    // $('#botonMenu1').css('color','rgb(0, 252, 108)');


  }

//   vistaTo = null;
//   addU = 0;
//   users:User[] = new Array(50).fill(u); //users es un array del modelo User
//   alterno:string;
//   aUser = null;
//   displayedColumns = ['pic','name', 'mail', 'cedula', 'number', 'options'];
//   dataSource = new MatTableDataSource(this.users);
//
//   @ViewChild(MatSort) sort: MatSort;
//
//   applyFilter(filterValue: string) {
//    filterValue = filterValue.trim(); // Remove whitespace
//    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
//    this.dataSource.filter = filterValue;
//  }
//
//   ngAfterViewInit() {
//     this.dataSource.sort = this.sort;
//   }
//
//   getAlterno(){
//     this.alterno = sessionStorage.getItem("alterno");
//     if(this.alterno == null){
//       return this.alterno = 'abrir';
//     }
//     return this.alterno;
//   }
//
//   // vista(payload){
//   // this.vistaTo = payload;
//   // }
//
// detalleUser(user){
//   this.aUser = user;
// }
//   segundoValor(payload){
//     // console.log(payload);
//     return payload;
//   }
//
// toggleAdd(pay){
//   return this.addU += pay;
// }

}
