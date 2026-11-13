import { Routes } from '@angular/router';
import { FormReactiveComponent } from './components/form-reactive-component/form-reactive-component';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
    {path: 'form', component: FormReactiveComponent},
    {path: '', pathMatch:'full', component: FormReactiveComponent},
    {path: '**', component: NotFoundPage}
];
