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
		public warning: string,
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
		public mountPerEth?: number,
		public hardCap?: string,
		public totalSupply?: string,
		public tokenBloq?: string,
    public bloqMessage?: string
		){}
}


//Modelo subscriptor
export class Subscriptor{
	constructor(
    public email?: string,
		public user?: User
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
		public subscriptions?: Subscription[],
		public likeProjects?: UserLike[],
		public disLikeProjects?: UserDisLike[],
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



export class UserLike{
	constructor(
		public id_project: number,
		public nameCoin: string,
		){}
}

export class UserDisLike{
	constructor(
		public id_project: number,
		public nameCoin: string,
		){}
}

export class Subscription{
	constructor(
		public _id: number,
		public nameCoin: string,
		){}
}
