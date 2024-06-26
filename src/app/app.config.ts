import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideEffects} from '@ngrx/effects';
import {provideRouterStore} from '@ngrx/router-store';
import {appFeatureKey, reducer} from "./state";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({
      [appFeatureKey]: reducer
    }),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideEffects(),
    provideRouterStore()
  ]
};
