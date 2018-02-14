import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed-component';
import { DetailsComponent } from './detalle-proyecto/detalle-proyecto.component';
// import { proofComponent } from './prueba/proof-component';
// import { QUESTION_ROUTES } from './admin/user/user.routing';

const APP_ROUTES: Routes = [
  { path: '', component: FeedComponent, pathMatch: 'full' },
  { path: 'detail', component: DetailsComponent },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
