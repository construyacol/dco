import { Update } from "../models/modelos.model";


// Modelo Lista


export class ProjectList{

	constructor(
		public _id:number,
		public comment: string,
    public type: string,
		public typeRelease: string,
		public target: string,
		public createdAt?: Date,
		public pool?: boolean,
		public coin?:CoinData,
    public video?:any,
    public links?:LinkArray[],
		public dateStart?: Date,
		public dateEnd?: Date,
		public diasTotal?: Date,
		public diasTranscu?: Date,
		public barDiasProgress?: Date
	){}
}


export class CoinData{
	constructor(
		public name?: string,
		public simbol?: string,
		public priceUsd?: string,
    public hardCap?: string,
		public Bono?: number,
    public minEth?: number
		){}
  }

  export class ModalResponse{
  	constructor(
  		public poolDate?: Date,
      public news?: Update[]
  		){}
    }


//modelo link
    export class LinkArray{
    	constructor(
    		public titulo?: string,
        public link?: string
    		){}
      }


//Modelo anuncio
  export class Ad{
    constructor(
      public titulo?: string,
			public typeRelease?: string,
      public target?: string,
      public createdAt?: Date,
      public description?: string,
      public link?: LinkArray[]
      ){}
    }
