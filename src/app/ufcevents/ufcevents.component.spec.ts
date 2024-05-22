import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfceventsComponent } from './ufcevents.component';

describe('UfceventsComponent', () => {
  let component: UfceventsComponent;
  let fixture: ComponentFixture<UfceventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UfceventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UfceventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
