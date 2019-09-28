import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdsComponent } from './ads/ads.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full", redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "advertisement", component: AdsComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent}
  //{path: "about", component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
