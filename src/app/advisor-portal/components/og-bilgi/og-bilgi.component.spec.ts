import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgBilgiComponent } from './og-bilgi.component';

describe('OgBilgiComponent', () => {
  let component: OgBilgiComponent;
  let fixture: ComponentFixture<OgBilgiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OgBilgiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OgBilgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
