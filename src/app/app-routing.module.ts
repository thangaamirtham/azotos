import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavtopComponent } from './navtop/navtop.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'nav', component:NavtopComponent},
  {path:'footer', component:FooterComponent},
  {path:'home', component:HomeComponent},
  {path:'mobileapp', component:MobileappComponent},
  {path:'portfolio', component:PortfolioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
