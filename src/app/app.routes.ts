import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Constants } from './models/constants';
import { PropertiesComponent } from './pages/properties/properties.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { AboutComponent } from './pages/about/about.component';
import { AgentsComponent } from './pages/agents/agents.component';

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
    {
        path: 'property-details/:id', component: PropertyDetailsComponent, title: `Property Details | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'about', component: AboutComponent, title: `About Us | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'agents', component: AgentsComponent, title: `Our Agents | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: '**', component: NotFoundComponent, title: `404 - Not Found | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
];
