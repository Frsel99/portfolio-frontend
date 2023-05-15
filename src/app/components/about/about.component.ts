import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';
import { Storage, ref, uploadBytes, getDownloadURL } from "@angular/fire/storage";
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person: Person = new Person("", "", "", "");
  editMode: boolean = false;
  isAdmin: boolean = false;
  newDescription: string = "";
  url: string = "";

  constructor(public personService: PersonService, private tokenService: TokenService, private storage: Storage) { }

  ngOnInit(): void {
    this.getPerson();
    if (this.tokenService.getAuthorities().includes("ROLE_ADMIN")) {
      this.isAdmin = true;
    }
  }

  getPerson(): void {
    this.personService.getPerson().subscribe(data => {
      this.person = data;
      this.newDescription = data.description;
      this.url = data.imgUrl;
    })
  }

  setEditMode(): void {
    this.editMode = !this.editMode;
  }

  editPerson(id: number | undefined) {
    const person = new Person(this.person.firstName, this.person.lastName, this.url, this.newDescription)
    this.personService.update(id, person).subscribe(data => {
      alert("Datos Actualizados");
      window.location.reload();
    }, err => {
      alert("Ocurrio un problema actualizando los datos");
    })
  }

  uploadImg(e: any) {
    if(!this.isAdmin) {
      return;
    }
    const file = e.target.files[0];
    const uuid = UUID.UUID();
    const imgRef = ref(this.storage, `images/${uuid}`)
    uploadBytes(imgRef, file)
      .then(res => {this.getImg(uuid)})
      .catch(err => console.log(err))
  }

  getImg(uuid: UUID) {
    const imgRef = ref(this.storage, `images/${uuid}`)
    getDownloadURL(imgRef)
      .then(res => {
        this.url = res;
        this.editPerson(this.person.id);
      })
      .catch(err => console.log(err))
  }

}
