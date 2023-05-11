export class Experience {
  id?: number;
  job: string;
  period: string;
  description: string;
  image: string;
  company: string;
  isCurrentJob: boolean;
  personId: number;

  constructor(job: string, period: string, description: string, image: string, company: string, isCurrentJob: boolean, personId: number, id?: number) {
    this.job = job;
    this.period = period
    this.description = description;
    this.image = image;
    this.company = company;
    this.isCurrentJob = isCurrentJob;
    this.personId = personId;
    this.id = id;
  }


}
