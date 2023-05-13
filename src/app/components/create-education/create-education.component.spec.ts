import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEducationComponent } from './create-education.component';

describe('CreateEducationComponent', () => {
  let component: CreateEducationComponent;
  let fixture: ComponentFixture<CreateEducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEducationComponent]
    });
    fixture = TestBed.createComponent(CreateEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
