import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterdetailsComponent } from './fighterdetails.component';

describe('FighterdetailsComponent', () => {
  let component: FighterdetailsComponent;
  let fixture: ComponentFixture<FighterdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FighterdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FighterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
