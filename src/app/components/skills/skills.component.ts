import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [];
  addMode: boolean = false;
  editId: number | undefined = 0;
  isAdmin: boolean = false;
  form: {
    skill: string;
    percentage: number;
    personId: number;
  } = {
      skill: "",
      percentage: 0,
      personId: 1
    };


  constructor(private skillService: SkillService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getSkills();
    if (this.tokenService.getAuthorities().includes("ROLE_ADMIN")) {
      this.isAdmin = true;
    }
  }

  getSkills(): void {
    this.skillService.getSkills().subscribe(data => {
      this.skills = data;
    })
  }

  setAddMode(): void {
    this.addMode = !this.addMode;
  }

  setEditMode(id: number | undefined, skill: Skill): void {
    this.editId = id;
    this.form = skill;
  }

  cancelEditMode() {
    this.editId = 0;
  }

  handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const name = target.name as keyof typeof this.form;
    this.form[name] = target.value as never;
  }

  editSkill(id: number | undefined) {
    const skill = new Skill(this.form.skill, this.form.percentage, this.form.personId)
    skill.id = id;
    this.skillService.update(skill).subscribe(data => {
      if (data === 'BAD_REQUEST') {
        alert("Faltan Campos");
        throw new Error("Faltan Campos");
      }
      alert("Habilidad Actualizada");
      const index = this.skills.findIndex(exp => exp.id === id)
      this.skills[index] = skill;
      this.editId = 0;
    }, err => {
      alert("Ocurrio un problema actualizando la habilidad");
    })
  }

  deleteSkill(id: number | undefined) {
    this.skillService.delete(id).subscribe(data => {
      if (data === "OK") {
        alert("Habilidad Eliminada")
        window.location.reload();
      }
    }, err => {
      alert("Ocurrio un problema eliminando la habilidad")
    });
  }
}
