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
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component'
import { FormsModule } from '@angular/forms';
import { InterceptorProvider } from './services/interceptor';
import { CreateExperienceComponent } from './components/create-experience/create-experience.component';
import { CreateSkillComponent } from './components/create-skill/create-skill.component';
import { CreateEducationComponent } from './components/create-education/create-education.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    BannerComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    HomeComponent,
    LoginComponent,
    CreateExperienceComponent,
    CreateSkillComponent,
    CreateEducationComponent,
    CreateProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
  providers: [InterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
