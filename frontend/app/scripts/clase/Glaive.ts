import {Character} from "../Character";


export class Glaive extends Character {


    constructor(uNombre: string) {

        /* Valores Iniciales */
        const Vigor: number = 10;
        const Velocidad: number = 8;
        const Intelecto: number = 7;


        super(uNombre, 1, Vigor, Velocidad, Intelecto);


    }
}