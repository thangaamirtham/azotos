import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavtopComponent } from './navtop/navtop.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import {  MatCardModule } from '@angular/material/card';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavtopComponent,
    FooterComponent,
    HomeComponent,
    MobileappComponent,
    PortfolioComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule
  ],

  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
