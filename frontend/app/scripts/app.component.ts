/* Depencias de codigo */
import {Observable} from 'rxjs/Rx';

/* Dependecias de Angular */
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here

/* Dependencias de aplicacion */
import {Character, Clase} from './Character'

@Component({
    selector: 'my-app',
    template: `
<div class="container">
    <h1>{{title}}</h1>
    <ul class="personajes">
        <li *ngFor="let personaje of listado">
            <h2>Info: {{personaje.nombre}}</h2>
            <input [(ngModel)]="personaje.nombre" placeholder="Nombre">
            <div><label>Rango: </label>{{personaje.rango}}</div>
            <div><label>Clase: </label>{{personaje.clase}}</div>
        </li>
    </ul>
</div>
  `
})
export class AppComponent {

    title: string = "Personajes";
    listado: Character[] = [
        {nombre: "Dora", rango: 1, clase: Clase.Seeker},
        {nombre: "Juan", rango: 1, clase: Clase.Glaive},
        {nombre: "Torquemada", rango: 1, clase: Clase.Nano},
        {nombre: "Druidenton", rango: 1, clase: Clase.Jack}
    ]

}

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}