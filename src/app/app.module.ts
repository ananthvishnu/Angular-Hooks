import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HeroComponent } from './hero/hero.component';
import { IconBoxComponent } from './icon-box/icon-box.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientComponent } from './client/client.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ServiceComponent } from './service/service.component';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { CtaComponent } from './cta/cta.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TopbarComponent,
    HeroComponent,
    IconBoxComponent,
    AboutUsComponent,
    ClientComponent,
    WhyUsComponent,
    ServiceComponent,
    CtaComponent,
    PortfolioComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule  { 
 
}
