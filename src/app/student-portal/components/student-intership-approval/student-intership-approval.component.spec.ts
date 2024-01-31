import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIntershipApprovalComponent } from './student-intership-approval.component';

describe('StudentIntershipApprovalComponent', () => {
  let component: StudentIntershipApprovalComponent;
  let fixture: ComponentFixture<StudentIntershipApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentIntershipApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentIntershipApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
