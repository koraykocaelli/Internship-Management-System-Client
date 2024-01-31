import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgBelgeComponent } from './ig-belge.component';

describe('IgBelgeComponent', () => {
  let component: IgBelgeComponent;
  let fixture: ComponentFixture<IgBelgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IgBelgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IgBelgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
