import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { EventsComponent } from './events/events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { RishikeshComponent } from './rishikesh/rishikesh.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WhoComponent } from './about/who/who.component';
import { WhyComponent } from './about/why/why.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    EventsComponent,
    RishikeshComponent,
    OurteamComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    GallaryComponent,
    NotFoundComponent,
    WhoComponent,
    WhyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule, 
    BrowserModule,
    NgxUiLoaderModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {path: 'home', component: HomeComponent},
      {path: 'About', component: WhoComponent},
      {path: 'Join-us', component: WhyComponent},
      {path: 'gallary', component: GallaryComponent},
      {path: 'events', component: EventsComponent},
      {path: 'team', component: OurteamComponent},
      {path: 'contact', component: ContactComponent},
      {path: '**', component:NotFoundComponent}
    ]),
    NgbModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
