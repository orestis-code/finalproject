import {provideRouter, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AuthenticatedPageComponent} from './authenticated-page/authenticated-page.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'welcome', component: AuthenticatedPageComponent },
];

export const appRouter = provideRouter(routes);
