import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPlaceInfoComponent } from './work-place-info.component';

describe('WorkPlaceInfoComponent', () => {
  let component: WorkPlaceInfoComponent;
  let fixture: ComponentFixture<WorkPlaceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkPlaceInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkPlaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
