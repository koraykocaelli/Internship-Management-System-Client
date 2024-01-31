import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIntershipNotebookComponent } from './student-intership-notebook.component';

describe('StudentIntershipNotebookComponent', () => {
  let component: StudentIntershipNotebookComponent;
  let fixture: ComponentFixture<StudentIntershipNotebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentIntershipNotebookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentIntershipNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
