import 'reflect-metadata';
import 'zone.js';

//main entry point
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './scripts/app.component';

platformBrowserDynamic().bootstrapModule(AppModule)