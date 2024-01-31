import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIntershipInfoComponent } from './student-intership-info.component';

describe('StudentIntershipInfoComponent', () => {
  let component: StudentIntershipInfoComponent;
  let fixture: ComponentFixture<StudentIntershipInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentIntershipInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentIntershipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
