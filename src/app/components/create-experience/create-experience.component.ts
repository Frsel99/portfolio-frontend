import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.css']
})
export class CreateExperienceComponent {
  isAdmin = false;
  job!: string;
  period!: string;
  description!: string;
  company!: string;
  personId: number = 1;

  constructor(private experienceService: ExperienceService) { }

  createExperience() {
    const experience = new Experience(this.job, this.period, this.description, this.company, this.personId)
    this.experienceService.save(experience).subscribe(data => {
      if (data === 'BAD_REQUEST') {
        alert("Faltan Campos");
        throw new Error("Faltan Campos");
      }
      alert("Experiencia Añadida");
      window.location.reload();
    }, err => {
      alert("Fallo la creacion de la experiencia");
    })
  }

}
