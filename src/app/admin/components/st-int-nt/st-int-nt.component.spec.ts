import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StIntNtComponent } from './st-int-nt.component';

describe('StIntNtComponent', () => {
  let component: StIntNtComponent;
  let fixture: ComponentFixture<StIntNtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StIntNtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StIntNtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
