import { Component } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.css']
})
export class CreateEducationComponent {
  isAdmin = false;
  study!: string;
  period!: string;
  description!: string;
  institution!: string;
  personId: number = 1;

  constructor(private educationService: EducationService) { }

  createEducation() {
    const education = new Education(this.study, this.period, this.description, this.institution, this.personId)
    this.educationService.save(education).subscribe(data => {
      if (data === 'BAD_REQUEST') {
        alert("Faltan Campos");
        throw new Error("Faltan Campos");
      }
      alert("Educacion Añadida");
      window.location.reload();
    }, err => {
      alert("Fallo la creacion de la educacion");
    })
  }
}
