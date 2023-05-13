import { Component } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educations: Education[] = [];
  addMode: boolean = false;
  editId: number | undefined = 0;
  isAdmin: boolean = false;
  form: {
    study: string;
    period: string;
    description: string;
    institution: string;
    personId: number;
  } = {
      study: "",
      period: "",
      description: "",
      institution: "",
      personId: 1
    };


  constructor(private educationService: EducationService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getEducations();
    if (this.tokenService.getAuthorities().includes("ROLE_ADMIN")) {
      this.isAdmin = true;
    }
  }

  getEducations(): void {
    this.educationService.getEducations().subscribe(data => {
      this.educations = data;
    })
  }

  setAddMode(): void {
    this.addMode = !this.addMode;
  }

  setEditMode(id: number | undefined, education: Education): void {
    this.editId = id;
    this.form = education;
  }
  
  cancelEditMode() {
    this.editId = 0;
  }

  handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const name = target.name as keyof typeof this.form;
    this.form[name] = target.value as never;
  }

  editEducation(id: number | undefined) {
    const education = new Education(this.form.study, this.form.period, this.form.description, this.form.institution, this.form.personId)
    education.id = id;
    this.educationService.update(education).subscribe(data => {
      alert("Educacion Actualizada");
      const index = this.educations.findIndex(exp => exp.id === id)
      this.educations[index] = education;
      this.editId = 0;
    }, err => {
      alert("Ocurrio un problema actualizando la educacion");
    })
  }

  deleteEducation(id: number | undefined) {
    this.educationService.delete(id).subscribe(data => {
      if(data === "OK") {
        alert("Educacion Eliminada")
      }
    }, err => {
      alert("Ocurrio un problema eliminando la educacion")
    });
  }
}
