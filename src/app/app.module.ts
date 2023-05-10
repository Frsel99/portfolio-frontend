import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    BannerComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "radius": 130,
      "space": -10,
      "maxPercent": 100,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 18,
      "outerStrokeColor": "#b7fe7a",
      "outerStrokeGradientStopColor": "#b7fe7a",
      "innerStrokeColor": "#000000",
      "innerStrokeWidth": 14,
      "lazy": true,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "titleColor": "#ffffff",
      "titleFontSize": "2rem",
      "showSubtitle": false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
