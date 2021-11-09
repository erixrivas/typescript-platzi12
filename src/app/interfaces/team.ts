import { Country } from "./country";
import { player } from "./player";

export interface Team{
    id:string;
    name :string;
    country:Country;
    players:player[];
}