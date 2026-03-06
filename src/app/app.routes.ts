import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MonsterList } from './pages/monster-list/monster-list';
import { MonsterComponent } from './pages/monster/monster';
import { NotFound } from './pages/not-found/not-found';
import { Login } from './pages/login/login';
import { isLoggedInGuard } from './guards/is-logged-in-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },{
        path: 'home',
        component: MonsterList,
        canActivate: [isLoggedInGuard]
    },{
        path: 'login',
        component: Login
    },{
        path: 'monster',
        children: [{
                path: '',
                component: MonsterComponent,
                canActivate: [isLoggedInGuard]
            },
            {
                path: ":monster",
                component: MonsterComponent,
                canActivate: [isLoggedInGuard]
            }
        ]
    },{
        path: '**',
        component: NotFound
    }
];
