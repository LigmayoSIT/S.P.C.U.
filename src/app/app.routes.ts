import { Routes } from '@angular/router';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { MainPage } from './main-page/main-page';
import { FormsPage } from './forms-page/forms-page';
import { PublicViewingPage } from './public-viewing-page/public-viewing-page';

export const routes: Routes = [
    {path: 'main-page', component: MainPage},
    {path: 'forms-page', component: FormsPage},
    {path: 'public-viewing-page', component: PublicViewingPage},
    {path: '', redirectTo: 'main-page', pathMatch: 'full'}
];
