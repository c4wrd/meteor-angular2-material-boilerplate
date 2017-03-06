import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { TodoManagerPage } from './containers/todo-manager.page';
import { LoginPage } from './containers/login.page';

export const routes: Routes = [

    {
        path: '',
        component: TodoManagerPage,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginPage
    },
    { 
        path: '**', redirectTo: '' 
    }
]