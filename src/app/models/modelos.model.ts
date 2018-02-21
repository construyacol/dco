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
		public warning?: string,
    public minEth?: number,
		public maxEth?: number,
		public bono?: number,
		public link?: string,
		public endDate?: Date,
		public createdAt?: Date,
		public projectId?: number,
		public active?: boolean,
		public id?: number,
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
		public mountPerEth?: number,
		public hardCap?: string,
		public totalSupply?: string,
		public tokenBloq?: string,
    public bloqMessage?: string
		){}
}


//Modelo redes sociales
export class SocialNetwork{
	constructor(
    public redName?: string,
		public link?: string
		){}
}

//Modelo contenido multimedia (videos youtube proyecto)
export class Multimedia{
	constructor(
    public description?: string,
		public link?: string
		){}
}

//Modelo Exchanges
export class Exchange{
	constructor(
    public name?: string,
		public link?: string
		){}
}


//Modelos a referencia clase User-------------------------------------------------------------------------


//Modelo user
export class User{
	constructor(
		public _id: number,
		public name?: string,
		public email?: string,
		public password?: string,
		public userType?: string,
		public subscriptions?: number[],
		public likeProjects?: number[],
		public disLikeProjects?: number[],
    public avaible?: boolean, //condicional para habilitar o inhabilitar usuario en plataforma
		public membership?: Membership,

		){}
}

export class Membership{
	constructor(
		public startDate: Date,
		public endDate: Date,
		){}
}
