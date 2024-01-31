import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApSidebarComponent } from './ap-sidebar.component';

describe('ApSidebarComponent', () => {
  let component: ApSidebarComponent;
  let fixture: ComponentFixture<ApSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
