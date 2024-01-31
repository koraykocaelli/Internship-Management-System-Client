import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApHeaderComponent } from './ap-header.component';

describe('ApHeaderComponent', () => {
  let component: ApHeaderComponent;
  let fixture: ComponentFixture<ApHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
