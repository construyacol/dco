import { Update, Pool, Social, Coin, Exchange,
SocialNetwork, Multimedia } from "../models/modelos.model";

export class Project{

	constructor(
		public _id:number,
		public title: string,
		public type: string,
		public target: string,
		public createdAt?: Date,
		public pool?: Pool,
		public coin?:Coin,
		public social?:Social,
		public exchange?:Exchange[],
		public news?:Update[],
		public subscriptor?:number[],
		public socialNetwork?:SocialNetwork[],
		public multimedia?:Multimedia[],

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
