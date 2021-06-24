import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksCalendarComponent } from './risks-calendar.component';

describe('RisksCalendarComponent', () => {
  let component: RisksCalendarComponent;
  let fixture: ComponentFixture<RisksCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisksCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RisksCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
