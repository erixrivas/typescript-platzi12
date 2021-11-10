import { Country } from "./country";
import { SquadNumber } from "./squadNumber";

export interface player{
    id:string;
    name:string;
    lastName:string;
    position:SquadNumber;
    height:number;
    weight:number;
    leftFooted:boolean;
    nationality:Country;
}

