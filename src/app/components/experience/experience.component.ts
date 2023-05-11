import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  addMode: boolean = false;
  editId: number | undefined = 0;
  isAdmin: boolean = false;
  form: {
    job: string;
    period: string;
    description: string;
    image: string;
    company: string;
    isCurrentJob: boolean;
    personId: number;
  } = {
      job: "",
      period: "",
      description: "",
      image: "qwe",
      company: "",
      isCurrentJob: false,
      personId: 1
    };


  constructor(private experienceService: ExperienceService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getExperiences();
    if (this.tokenService.getAuthorities().includes("ROLE_ADMIN")) {
      this.isAdmin = true;
    }
  }

  getExperiences(): void {
    this.experienceService.getExperiences().subscribe(data => {
      this.experiences = data;
    })
  }

  setAddMode(): void {
    this.addMode = !this.addMode;
  }

  setEditMode(id: number | undefined, exp: Experience): void {
    this.editId = id;
    this.form = exp;
  }
  
  cancelEditMode() {
    this.editId = 0;
  }

  handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const name = target.name as keyof typeof this.form;
    this.form[name] = target.value as never;
  }

  editExperience(id: number | undefined) {
    const experience = new Experience(this.form.job, this.form.period, this.form.description, this.form.image, this.form.company, this.form.isCurrentJob, this.form.personId)
    experience.id = id;
    this.experienceService.update(experience).subscribe(data => {
      alert("Experiencia Actualizada");
      const index = this.experiences.findIndex(exp => exp.id === id)
      this.experiences[index] = experience;
      this.editId = 0;
    }, err => {
      alert("Ocurrio un problema actualizando la experiencia");
    })
  }

  deleteExperience(id: number | undefined) {
    console.log(id);
    this.experienceService.delete(id).subscribe(data => {
      if(data === "OK") {
        alert("Experiencia Eliminada")
      }
    }, err => {
      alert("Ocurrio un problema eliminando la experiencia")
    });
  }
}
