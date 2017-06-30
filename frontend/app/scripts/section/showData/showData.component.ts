/* Dependecias de Angular */
import {Component} from '@angular/core';

import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'show-data',
    templateUrl: 'html/section/showData/showData.template.html'
})
export class ShowDataComponent {




     obs = Observable.interval(1000).map((v) => Date.now());

    ngOnInit() { this.obs.subscribe(value => console.log("Subscriber: " + value)); }
}