import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const options = {
  preserveWhitespaces: false
};

if (environment.production) {
  enableProdMode();
} else {
  options.preserveWhitespaces = true;
}

platformBrowserDynamic().bootstrapModule(AppModule, options).catch(err => console.log(err));