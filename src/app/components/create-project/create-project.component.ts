import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Storage, ref, list, uploadBytes, getDownloadURL } from "@angular/fire/storage";
import { UUID } from 'angular2-uuid';



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
  images: string[] = [];
  personId: number = 1;

  constructor(private projectService: ProjectService, private storage: Storage) { }

  createProject() {
    const project = new Project(this.project, this.period, this.description, this.images, this.personId);
    this.projectService.save(project).subscribe(data => {
      if (data === 'BAD_REQUEST') {
        alert("Faltan Campos");
        throw new Error("Faltan Campos");
      }
      alert("Proyecto Añadido");
      window.location.reload();
    }, err => {
      alert("Fallo la creacion del proyecto");
    })
  }

  uploadImg(e: any) {
    const file = e.target.files[0];
    const uuid = UUID.UUID();
    const imgRef = ref(this.storage, `images/${uuid}`)
    uploadBytes(imgRef, file)
      .then(res => { this.getImg(uuid) })
      .catch(err => console.log(err))
  }

  getImg(uuid: UUID) {
    const imgRef = ref(this.storage, `images/${uuid}`)
    getDownloadURL(imgRef)
      .then(res => {
        this.images.push(res);
      })
      .catch(err => console.log(err))
  }
}
