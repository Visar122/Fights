import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterRecordsComponentComponent } from './fighter-records-component.component';

describe('FighterRecordsComponentComponent', () => {
  let component: FighterRecordsComponentComponent;
  let fixture: ComponentFixture<FighterRecordsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FighterRecordsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FighterRecordsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
