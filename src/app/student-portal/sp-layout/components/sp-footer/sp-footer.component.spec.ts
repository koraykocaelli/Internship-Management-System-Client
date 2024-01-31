import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpFooterComponent } from './sp-footer.component';

describe('SpFooterComponent', () => {
  let component: SpFooterComponent;
  let fixture: ComponentFixture<SpFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
