import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorPortalComponent } from './advisor-portal.component';

describe('AdvisorPortalComponent', () => {
  let component: AdvisorPortalComponent;
  let fixture: ComponentFixture<AdvisorPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvisorPortalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisorPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
