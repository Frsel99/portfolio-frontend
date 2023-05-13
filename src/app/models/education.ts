export class Education {
  id?: number;
  study: string;
  period: string;
  description: string;
  institution: string;
  personId: number;

  constructor(study: string, period: string, description: string, institution: string, personId: number, id?: number) {
    this.study = study;
    this.period = period
    this.description = description;
    this.institution = institution;
    this.personId = personId;
    this.id = id;
  }
}
