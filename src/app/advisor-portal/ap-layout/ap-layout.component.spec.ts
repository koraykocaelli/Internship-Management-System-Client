import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApLayoutComponent } from './ap-layout.component';

describe('ApLayoutComponent', () => {
  let component: ApLayoutComponent;
  let fixture: ComponentFixture<ApLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
