/* Depencias de codigo */
import {Observable} from 'rxjs/Rx';

/* Dependecias de Angular */
import {Component, NgModule} from '@angular/core'; // NgModule -> Modulo Raiz de la aplicacion
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here

/* Dependencias de aplicacion */
import {Character} from './Character';
import {Glaive} from './clase/Glaive';

@Component({
    selector: 'my-app',
    template: `
<div class="container-parent">
<div class="container">
    <h1>{{title}}</h1>
    {{diagnostic}}
    <form class="hero-form">
       <div class="form-group">
            <label for="name">Name</label>
            <input id="name" name="name" [(ngModel)]="model.nombre" required>
        </div>
     
        <div class="form-group">
            <label for="clase">Clase</label>
            <select [(ngModel)]="model.clase" name="clase">
                <option id="clase" *ngFor="let clase of clases" [value]="clase">{{clase}}</option>
            </select>
        </div>
        <button type="button" (click)="newCharacter()" class="btn btn-success">Añadir</button>
    </form>
    <ul class="personajes">
        <li *ngFor="let personaje of listado">
            <h2>Info: {{personaje.nombre}}</h2>
            <div><label>Rango: </label>{{personaje.rango}}</div>
        </li>
    </ul>
</div>
</div>

  `
})
export class AppComponent {

    title: string = "Personajes";

    clases: string [] = ['Glaive', 'Jack', 'Nano'];
    listado: Character[] = [];

    model = {nombre:""};


    newCharacter() {

        this.listado.push(new Glaive(this.model.nombre))
    }

    get diagnostic() { return JSON.stringify(this.model); }


}

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}