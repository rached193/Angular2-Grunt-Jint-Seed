import {Character} from "../Character";


export class Nano extends Character {


    constructor(uNombre: string) {

        /* Valores Iniciales */
        const Vigor: number = 10;
        const Velocidad: number = 10;
        const Intelecto: number = 10;


        super(uNombre, 1, Vigor, Velocidad, Intelecto);


    }
}