import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  isAdmin = false;
  project!: string;
  period!: string;
  description!: string;
  images: string[] = ["https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-un-gato-2.jpeg", "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg"];
  personId: number = 1;

  constructor(private projectService: ProjectService) { }

  createProject() {
    const project = new Project(this.project, this.period, this.description, this.images, this.personId);
    this.projectService.save(project).subscribe(data => {
      alert("Proyecto Añadido");
      window.location.reload();
    }, err => {
      alert("Fallo la creacion del proyecto");
    })
  } 
}
