import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class PublicModule { }
