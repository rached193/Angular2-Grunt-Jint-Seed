/* Dependecias de Angular */
import {Component} from '@angular/core';

import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'add-data',
    templateUrl: 'html/section/addData/addData.template.html'
})
export class AddDataComponent {




     obs = Observable.interval(1000).map((v) => Date.now());

    ngOnInit() { this.obs.subscribe(value => console.log("Subscriber: " + value)); }
}