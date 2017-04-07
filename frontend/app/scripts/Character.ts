export class Character {
    nombre: string;
    rango: number;
    clase: Clase;

    // vigor: Atributo;
    // velocidad: Atributo;
    // intelecto: Atributo;

    constructor(uNombre: string, uRango: number, uClase: Clase) {
        this.nombre = uNombre;
        this.rango = uRango;
        this.clase = uClase;

        switch (uClase) {
            case Clase.Glaive:

            case Clase.Jack:
                break;
            case Clase.Nano:
                break;
            case Clase.Seeker:
                break;
            case Clase.Glint:
                break;

        }
    }


}

export enum Clase {
    Glaive,
    Jack,
    Nano,
    Seeker,
    Glint
}

class Atributo {
    reserva: number;
    actual: number;
    ventaja: number = 0;
}