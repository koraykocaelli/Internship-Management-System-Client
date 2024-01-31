import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApFooterComponent } from './ap-footer.component';

describe('ApFooterComponent', () => {
  let component: ApFooterComponent;
  let fixture: ComponentFixture<ApFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
