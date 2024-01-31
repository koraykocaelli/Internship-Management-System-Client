import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StajDefComponent } from './staj-def.component';

describe('StajDefComponent', () => {
  let component: StajDefComponent;
  let fixture: ComponentFixture<StajDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StajDefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StajDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
