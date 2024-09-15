import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Home/home/home.component";
import {SignInComponent} from "./Home/sign-in/sign-in.component";
import {CentreComponent} from "./Home/centre/centre.component";
import {BoutiqueComponent} from "./Home/boutique/boutique.component";
import {SignUpComponent} from "./Home/sign-up/sign-up.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home'  , component:HomeComponent} ,
  {path: 'signin' , component:SignInComponent},
  {path: 'centre' , component:CentreComponent},
  {path: 'boutique' , component:BoutiqueComponent },
  {path :'signUp' , component : SignUpComponent},
  {path :'admin' , loadChildren: ()=>import('./admin/admin.module').then((m) => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
