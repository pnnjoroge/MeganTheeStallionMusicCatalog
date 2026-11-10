import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { Album1 } from './album1/album1';
import { Album2 } from './album2/album2';
import { Album3 } from './album3/album3';
import { Album4 } from './album4/album4';
import { Album5 } from './album5/album5';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full' // 👈 Essential for clean default root home-page landing redirect behavior
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'catalog',
        component: Catalog
    },
    {
        path: 'album1',
        component: Album1
    },
    {
        path: 'album2',
        component: Album2
    },
    {
        path: 'album3',
        component: Album3
    },
    {
        path: 'album4',
        component: Album4
    },
    {
        path: 'album5',
        component: Album5
    },
    {
        path: 'error',
        component: Home
    },
    {
        path: '**',
        redirectTo: 'error'
    }

];
