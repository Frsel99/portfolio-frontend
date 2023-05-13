export class Skill {
  id?: number;
  skill: string;
  percentage: number;
  personId: number;

  constructor(skill: string, percentage: number, personId: number, id?: number) {
    this.skill = skill;
    this.percentage = percentage;
    this.personId = personId;
    this.id = id;
  }


}
