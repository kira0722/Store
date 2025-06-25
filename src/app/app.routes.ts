import { Routes } from '@angular/router';

import { List } from './Domains/Products/Pages/list/list'
import { About } from './Domains/Info/Pages/about/about';

export const routes: Routes = [
    {
        path: '',
        component: List
    },
    {
        path: 'about',
        component: About
    }
];
