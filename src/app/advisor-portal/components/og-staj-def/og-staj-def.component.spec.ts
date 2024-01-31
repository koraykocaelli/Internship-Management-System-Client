import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgStajDefComponent } from './og-staj-def.component';

describe('OgStajDefComponent', () => {
  let component: OgStajDefComponent;
  let fixture: ComponentFixture<OgStajDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OgStajDefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OgStajDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
