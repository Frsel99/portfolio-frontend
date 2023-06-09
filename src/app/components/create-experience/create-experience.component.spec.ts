import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExperienceComponent } from './create-experience.component';

describe('CreateExperienceComponent', () => {
  let component: CreateExperienceComponent;
  let fixture: ComponentFixture<CreateExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateExperienceComponent]
    });
    fixture = TestBed.createComponent(CreateExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
