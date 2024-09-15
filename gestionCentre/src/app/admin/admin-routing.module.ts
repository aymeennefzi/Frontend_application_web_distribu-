import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {ListCentreComponent} from "./list-centre/list-centre.component";
import {UpdateCentreComponent} from "./update-centre/update-centre.component";
import {ListBoutiqueComponent} from "./list-boutique/list-boutique.component";

const routes: Routes = [
  { path: '', component: AdminComponent,children :[
      { path: '',redirectTo:'AdminComponent', pathMatch:'full' },
      {path :'listcentre' , component:ListCentreComponent},
      {path :'updatecentre/:idcentre' , component:UpdateCentreComponent},
      {path :'boutique' , component:ListBoutiqueComponent}

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
