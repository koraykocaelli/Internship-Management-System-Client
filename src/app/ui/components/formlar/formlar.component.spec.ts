import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlarComponent } from './formlar.component';

describe('FormlarComponent', () => {
  let component: FormlarComponent;
  let fixture: ComponentFixture<FormlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormlarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
