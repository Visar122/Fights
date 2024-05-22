import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxingeventComponent } from './boxingevent.component';

describe('BoxingeventComponent', () => {
  let component: BoxingeventComponent;
  let fixture: ComponentFixture<BoxingeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxingeventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxingeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
