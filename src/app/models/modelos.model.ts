import { Project } from '../detalle-proyecto/proyecto.model';

// Modelo noticia
export class Update{
	constructor(
    public title: string,
		public description?: string,
		public link?: string,
		public datEvent?: Date,
		public createdAt?: Date,
		public project?: Project

		){}
}

//Modelo Piscina
export class Pool{
	constructor(
		public avaible: boolean,
    public minEth: number,
		public maxEth?: number,
		public endPool?: Date,
		public linkPool?: string,
		public createdAt?: Date,
    public project?: Project
		){}
}

//Modelo reactions
export class Social{
	constructor(
    public likes?: number,
		public dislikes?: number
		){}
}

//Modelo Info Moneda
export class Coin{
	constructor(
		public name?: string,
		public simbol?: string,
		public priceUsd?: string,
		public priceEth?: string,
		public mountPerEth?: string,
		public hardCap?: string,
		public totalSupply?: string,
		public tokenBloq?: string,
    public bloqMessage?: string
		){}
}


//Modelo user
export class User{
	constructor(
    public likes?: number,
		public dislikes?: number
		){}
}

//Modelo Exchanges
export class Exchange{
	constructor(
    public name?: string,
		public link?: string
		){}
}
