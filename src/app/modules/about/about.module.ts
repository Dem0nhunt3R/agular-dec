import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from './components/about/about.component';


const routes: Routes = [
  {path: '', component: AboutComponent}
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule {
}
