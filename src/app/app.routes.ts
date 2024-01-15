import { DetailComponentComponent } from './detail-component/detail-component.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Component } from '@angular/core';

export const routes: Routes = [
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: 'task', component: TaskComponent },
  { path: 'user', component: UserComponent },
  { path: 'home',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'details/:id', component: DetailComponentComponent,title:'Home  details' },
];


