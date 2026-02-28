import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Constants } from './models/constants';
import { PropertiesComponent } from './pages/properties/properties.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent, title: `Home | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'properties', component: PropertiesComponent, title: `Properties | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
];
