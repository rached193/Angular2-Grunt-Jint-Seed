/* Dependecias de Angular */
import {Component} from '@angular/core';


@Component({
    selector: 'header-component',
    templateUrl: 'html/components/header.template.html'
})
export class HeaderComponent {

    selected = {
        name: "jorge",
        subname:"campo",
        date: "31/10/2016",
        market: "SPAIN",
        bu: "POKEMON",
        evaluator: "JOSE ALFREDO"

    }


}