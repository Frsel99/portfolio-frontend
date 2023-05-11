export class Experience {
  id?: number;
  job: string;
  period: string;
  description: string;
  company: string;
  personId: number;

  constructor(job: string, period: string, description: string, company: string, personId: number, id?: number) {
    this.job = job;
    this.period = period
    this.description = description;
    this.company = company;
    this.personId = personId;
    this.id = id;
  }


}
