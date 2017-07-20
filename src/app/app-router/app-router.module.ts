import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { Comp3Component } from '../comp3/comp3.component';

import { List1Component } from '../list1/list1.component';
import { List2Component } from '../list2/list2.component';

const third: Routes = [
  { path: 'one', component: Comp1Component },
  { path: 'two', component: Comp2Component },
  { path: 'three', component: Comp3Component },
  { path: '**', redirectTo: 'one' }
];

const childRoutes: Routes = [
  { path: 'list1', component: List1Component },
  { path: 'list2', component: List2Component, children: third },
  { path: '**', redirectTo: 'list1' }
];

const routes: Routes = [
  { path: '', redirectTo: '/root', pathMatch: 'full' },
  { path: 'root', component: AppComponent},
  { path: 'comp1', component: Comp1Component, children: childRoutes },
  { path: 'comp2', component: Comp2Component, children: childRoutes },
  { path: 'comp3', component: Comp3Component, children: childRoutes }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule {}
