import { Country } from "./country";
import { player } from "./player";

export interface team{
    $key?:string;
    name :string;
    country:Country;
    players:player[];
}