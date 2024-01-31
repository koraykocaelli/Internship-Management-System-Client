import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpHeaderComponent } from './sp-header.component';

describe('SpHeaderComponent', () => {
  let component: SpHeaderComponent;
  let fixture: ComponentFixture<SpHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
