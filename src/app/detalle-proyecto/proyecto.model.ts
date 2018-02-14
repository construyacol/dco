import { Update, Pool, Social, Coin, Exchange } from "../models/modelos.model";



export class Project2{

	constructor(
		public _id:number,
		public title: string,
		public type: string,
		public createdAt?: Date,
		public pool?: Pool,
		public coin?:Coin,
		public social?:Social,
		public exchange?:Exchange[],
		public news?:Update[],

		public bono?: string,
		public aporteMax?: string,
		public aporteMin?: string,
    public webSite?: string,
    public whitePaper?: string,
		public dateStart?: Date,
		public dateEnd?: Date,
		public description?: string,
		public team?: string,
		public product?: string,
		public partner?: string,
		public contractAdress?: string,


	){}
}

export class Project{
  // coinDatas: CoinData[];
  // reactions: Reaction[];
  // dates: Date[];
  // pools: Pool[];
  news: Update[];
	// socials: Social[];

	constructor(
		public _id:string,
    public nombreCoin: string,
    public createdAt?: Date,
		public simbolCoin?: string,
		public precioUsd?: string,
		public precioEth?: string,
		public mountPerEther?: string,
		public hardCap?: string,
		public totalSupply?: string,
		public tokenBloqMes?: string,

		public bono?: string,
		public aporteMax?: string,
		public aporteMin?: string,
    public webSite?: string,
    public whitePaper?: string,
		public exchange?: string,

		public likes?: string,
    public disLikes?: string,

		public dateStart?: Date,
		public dateEnd?: Date,

		public pool?: boolean,

		public description?: string,
		public team?: string,
		public product?: string,
		public partner?: string,
		public contractAdress?: string,
		){
			this._id = _id;
			this.nombreCoin = nombreCoin;
			this.createdAt = createdAt;
			this.simbolCoin = simbolCoin;
			this.precioUsd = precioUsd;
			this.precioEth = precioEth;
			this.mountPerEther = mountPerEther;
			this.hardCap = hardCap;
			this.totalSupply = totalSupply;
			this.tokenBloqMes = tokenBloqMes;
			this.bono = bono;
			this.aporteMax = aporteMax;
			this.aporteMin = aporteMin;
			this.webSite = webSite;
			this.whitePaper = whitePaper;
			this.exchange = exchange;
			this.likes = likes;
			this.disLikes = disLikes;
			this.dateStart = dateStart;
			this.dateEnd = dateEnd;
			this.pool = pool;
			// this.pool = [];
			this.news = [];
			this.description = description;
			this.team = team;
			this.product = product;
			this.partner = partner;
			this.contractAdress = contractAdress;
		}
}
