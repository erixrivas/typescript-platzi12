import { Country } from "./country";
import { SquadNumber } from "./squadNumber";

export interface player{
    $key?:string;
    name:string;
    lastName:string;
    position:SquadNumber;
    heigth:number;
    weigth:number;
    leftfooted:boolean;
    nationality:Country;
}