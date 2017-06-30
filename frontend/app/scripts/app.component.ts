/* Depencias de codigo */
import {Observable} from 'rxjs/Rx';

/* Dependecias de Angular */
import {Component, NgModule} from '@angular/core'; // NgModule -> Modulo Raiz de la aplicacion
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule}   from '@angular/router';

/* Depedencias de la Aplicacion */
import {HeaderComponent} from './components/header.component'
import {FooterComponent} from './components/footer.component'
import {AddDataComponent} from './section/addData/addData.component'
import {ShowDataComponent} from './section/showData/showData.component'


/* Definicion de Rutas */



/* Definicion del componente root */
@Component({
    selector: 'my-app',
    templateUrl: 'html/layout.template.html'
})
export class AppComponent {

}


/* Definicion del modulo principal */
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        {path: '', redirectTo: '/add', pathMatch: 'full'},
        {
            path: 'add',
            component: AddDataComponent
        },
        {
            path: 'show',
            component: ShowDataComponent
        }
    ])],
    declarations: [AppComponent, HeaderComponent, FooterComponent, AddDataComponent, ShowDataComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}