/* Depencias de codigo */
import {Observable} from 'rxjs/Rx';

/* Dependecias de Angular */
import {Component, NgModule} from '@angular/core'; // NgModule -> Modulo Raiz de la aplicacion
import {BrowserModule} from '@angular/platform-browser';

/* Depedencias de la Aplicacion */
import {HeaderComponent} from './components/header.component'
import {FooterComponent} from './components/footer.component'
import {AddDataComponent} from './section/addData/addData.component'
import {ShowDataComponent} from './section/showData/showData.component'

@Component({
    selector: 'my-app',
    templateUrl: 'html/layout.template.html'
})
export class AppComponent {


}

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HeaderComponent, FooterComponent, AddDataComponent, ShowDataComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}