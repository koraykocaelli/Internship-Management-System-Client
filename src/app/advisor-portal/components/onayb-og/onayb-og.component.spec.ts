import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnaybOgComponent } from './onayb-og.component';

describe('OnaybOgComponent', () => {
  let component: OnaybOgComponent;
  let fixture: ComponentFixture<OnaybOgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnaybOgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnaybOgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
