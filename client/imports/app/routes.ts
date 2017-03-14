import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginContainer, TodoManagerContainer } from "@app/containers";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        component: TodoManagerContainer,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginContainer
    },
    { 
        path: '**', redirectTo: '' 
    }
]