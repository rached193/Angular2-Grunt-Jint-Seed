//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {Character} from './Character'

@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <h2>{{personaje.nombre}} details!</h2>
  <div><label>Rango: </label>{{personaje.rango}}</div>
  <div><label>Clase: </label>{{personaje.clase}}</div>
  `
})
export class AppComponent {

    title: string = "Personajes";
    personaje: Character = {
        nombre: "metraton",
        rango: 1,
        clase: "glaive"
    };

}

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}