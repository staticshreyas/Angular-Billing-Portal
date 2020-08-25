import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {routes} from './router'


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
