import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StajYonComponent } from './staj-yon.component';

describe('StajYonComponent', () => {
  let component: StajYonComponent;
  let fixture: ComponentFixture<StajYonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StajYonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StajYonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
