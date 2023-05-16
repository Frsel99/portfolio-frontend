import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent {
  isAdmin = false;
  skill!: string;
  percentage!: number;
  personId: number = 1;

  constructor(private skillService: SkillService) { }

  createSkill() {
    const skill = new Skill(this.skill, this.percentage, this.personId)
    this.skillService.save(skill).subscribe(data => {
      if (data === 'BAD_REQUEST') {
        alert("Faltan Campos");
        throw new Error("Faltan Campos");
      }
      alert("Habilidad Añadida");
      window.location.reload();
    }, err => {
      alert("Fallo la creacion de la habilidad");
    })
  }
}
