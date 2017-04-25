export class Character {
    nombre: string;
    rango: number;

    vigor: Atributo;
    velocidad: Atributo;
    intelecto: Atributo;

    constructor(uNombre: string, uRango: number, uVigor: number, uVelocidad, uIntelecto: number) {
        this.nombre = uNombre;
        this.rango = uRango;

    }


}

class Atributo {
    private reserva: number;
    private actual: number;
    private ventaja: number = 0;
}