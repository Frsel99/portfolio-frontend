import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Skill } from 'src/app/models/skill';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];
  addMode: boolean = false;
  editId: number | undefined = 0;
  isAdmin: boolean = false;
  form: {
    project: string;
    period: string;
    description: string;
    images: string[];
    personId: number;
  } = {
      project: "",
      period: "",
      description: "",
      images: [],
      personId: 1
    };


  constructor(private projectService: ProjectService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getProjects();
    if (this.tokenService.getAuthorities().includes("ROLE_ADMIN")) {
      this.isAdmin = true;
    }
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    })
  }

  setAddMode(): void {
    this.addMode = !this.addMode;
  }

  setEditMode(id: number | undefined, project: Project): void {
    this.editId = id;
    this.form = project;
  }

  cancelEditMode() {
    this.editId = 0;
  }

  handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const name = target.name as keyof typeof this.form;
    this.form[name] = target.value as never;
  }

  editProject(id: number | undefined) {
    const project = new Project(this.form.project, this.form.period, this.form.description, this.form.images, this.form.personId)
    project.id = id;
    this.projectService.update(project).subscribe(data => {
      alert("Proyecto Actualizado");
      const index = this.projects.findIndex(exp => exp.id === id)
      this.projects[index] = project;
      this.editId = 0;
    }, err => {
      alert("Ocurrio un problema actualizando el proyecto");
    })
  }

  deleteProject(id: number | undefined) {
    this.projectService.delete(id).subscribe(data => {
      if (data === "OK") {
        alert("Proyecto Eliminado")
        window.location.reload();
      }
    }, err => {
      alert("Ocurrio un problema eliminando el proyecto")
    });
  }
}
