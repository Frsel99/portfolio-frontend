export class Project {
  id?: number;
  project: string;
  period: string;
  description: string;
  images: string[];
  personId: number;

  constructor(project: string, period: string, description: string, images: string[], personId: number, id?: number) {
    this.project = project;
    this.period = period
    this.description = description;
    this.images = images;
    this.personId = personId;
    this.id = id;
  }
}
