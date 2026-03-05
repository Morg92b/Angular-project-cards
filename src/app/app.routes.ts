import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MonsterList } from './pages/monster-list/monster-list';
import { MonsterComponent } from './pages/monster/monster';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: MonsterList
    },
    {
        path: 'monster',
        children: [
            {
                path: '',
                component: MonsterComponent,
            },
            {
                path: ":monster",
                component: MonsterComponent,
            }
        ]
    },
    {
        path: '**',
        component: NotFound
    }
];
