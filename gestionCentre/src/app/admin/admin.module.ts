import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ListCentreComponent } from './list-centre/list-centre.component';
import { UpdateCentreComponent } from './update-centre/update-centre.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListBoutiqueComponent } from './list-boutique/list-boutique.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListCentreComponent,
    UpdateCentreComponent,
    ListBoutiqueComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
